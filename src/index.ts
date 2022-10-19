import fs from 'fs';
import path from 'path';
import ora from 'ora';
import { marked } from 'marked';
import puppeteer from 'puppeteer'; // google开发的无头浏览器
import { cosmiconfig, cosmiconfigSync } from 'cosmiconfig'; // 加载配置文件

export interface Options {
  output?: string; // 输出图片路径
  width?: number; // 输出图片宽度
}

/**
 * @params name 用户输入的文件路径(相对/绝对路径)
 */
export default async (input: string, options?: Options) => {
  const { output = 'example.png', width = 800 } = options || {};

  if (typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`);
  }

  // 读取 input 文件对应的内容
  const filename = path.resolve(input); // 获取文件绝对路径

  // 判断文件是否存在 & 是文件或文件夹
  if (!fs.existsSync(filename)) {
    throw new Error('文件路径不存在');
  }

  const stat = fs.statSync(filename);
  if (stat.isDirectory()) {
    throw new Error('给定路径是一个文件夹，而不是文件');
  }

  const contents = fs.readFileSync(input, 'utf8');
  // 使用 marked 将 markdown 转换成 html
  const fregment = marked(contents);

  // 默认模板
  const defaultHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="https://unpkg.com/github-markdown-css" />
      <style>
        .markdown-body {
          width: 90%;
          max-width: 700px;
          margin: 40px auto;
        }
      </style>
    </head>
    <body class="markdown-body">
      $fregment$
    </body>
    </html>
  `;

  // 加载配置文件中的模板
  const explorer = cosmiconfigSync('md2png');
  const { config = {} } = explorer.search(process.cwd()) || {};
  const templete = ((config.templete || defaultHtml) as string).replace(
    '$fregment$',
    fregment,
  );

  // 将 html 转成图片 （使用puppeteer无头浏览器在后台打开页面然后使用浏览器的截图效果实现html->pic）
  // loading
  const spinner = ora('转换中...').start();
  spinner.color = 'blue';
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width, height: 1000 });
    await page.setContent(templete);
    await page.screenshot({ path: output, fullPage: true });
    await browser.close();
    spinner.succeed('转换成功');
  } catch (error) {
    spinner.fail('转换失败');
  }
};
