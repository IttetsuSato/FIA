## create project
`npx create-react-app <jsxx_XXXXXX>`

### WSL2でホットリロードが効かない問題の対応
.envを作成し、`CHOKIDAR_USEPOLLING=true`
or
package.jsonのscriptsを
`"start": "CHOKIDAR_USEPOLLING=true react-scripts start"`
に変更
