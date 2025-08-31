This project is ready for GitHub Pages at /Portfolio and for localhost/other hosts.

Included changes:
- src/assets: Rishi.jpg, Rishi_Resume.pdf (imported in App.tsx)
- Header: glassy sticky bar with headshot, Live, GitHub (repositories tab), Resume (download), mobile menu
- Experience section appears before Projects
- Helper CSS in src/main.css for header styles
- Vite base defaults to '/', deploy script builds with --base=/Portfolio/
- package.json scripts:
    predeploy: vite build --base=/Portfolio/ && shx cp dist/index.html dist/404.html
    deploy:    gh-pages -d dist -r https://github.com/rishivankayala/Portfolio.git -b gh-pages

Deploy steps:
1) npm install
2) npm i -D gh-pages shx   (if not installed)
3) npm run deploy
Then enable GitHub Pages on the Portfolio repo, branch 'gh-pages', folder '(root)'.
