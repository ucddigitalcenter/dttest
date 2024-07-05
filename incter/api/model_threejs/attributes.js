/** 封装unity接口***/

// var module1 = (function () {
let GetLayerss;
// return {
// 开启点击
function _EnableClick(EnableLayers, name) {}
//获取物体信息 int id,string type
function _GetPropertyById(strs, type) {}
//获取物体所有信息
function _GetObjectAllPropertiesById(strs) {}
//设置鼠标覆盖层
function _SetHoverLayer(GetLayerss) {}
//清空鼠标覆盖层
function _ClearHoverLayer() {}
//开关鼠标覆盖
function _EnableHover(trigger, name) {}
//设置点击层
function _SetClickLayer(GetLayerss) {}
//清空点击层
function _ClearClickLayer() {}
//开关漫游
function _EnableRoaming(EnableRoaminglayers) {}
//开关拖拽
function _EnableDrag(EnableDraglayers) {}
//设置拖拽层
function _SetDragLayer(GetLayerss) {}
//清空拖拽层
function _ClearDragLayer() {}
//显示所有选中的模型
function _ShowSelects() {}
//获取所有显示的模型
function _GetShownObjs() {}
//显示模型
function _ShowObj(strs) {}
//隐藏所有模型
function _HideAllObjs() {}
//隐藏模型
function _HideObj(strs) {}
//获取所有隐藏的模型
function _GetHiddenObjs() {}
//获取模型信息
function _GetComponentsInfo() {}
// 射线管理（框选接口实现）
function _EnableRectSelect(trigger, name) {}
// 获取所有的射线层
function _GetLayers() {}

function RectSelectResult(str) {}

/*
 *资源下载-异步 资源查询、资源下载、资源释放接口实现
 *
 */
// 下载资源
function _LoadAsset(url, onloadname, ongprogressname, onerrorname) {}

// 卸载AB包
function _UnLoadAssetBundle(url, Destroylayer, onerrorname) {}

// 卸载所有AB包
function _UnloadAllAssetBundles(url, Destroylayer, onerrorname) {}

// 销毁指定ID模型
function _DestroyObject(id, onerrorname) {}

// 销毁所有模型
function _DestroyAllObject(onerrorname) {}

function _createElement() {
  let divEles = document.createElement("div");
  divEles.innerHTML = `<canvas id="unity-canvas" width=960 height=600 tabindex="-1"></canvas>`;
  document.body.appendChild(divEles);
  divEles = divEles;
}
function _addEleEvent() {
  // 创建一个场景
  const scene = new THREE.Scene();

  // 创建一个相机 视点
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  // 设置相机的位置
  camera.position.set(0, 0, 20);

  // 创建一个渲染器
  const renderer = new THREE.WebGLRenderer();
  // 设置渲染器尺寸
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // 添加一个立方体
  // 定义了一个立方体的对象
  const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
  // 创建材质
  const cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: false,
  });
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  // 添加到场景里
  scene.add(cube);

  // 添加一个球体
  const sphereGeometry = new THREE.SphereGeometry(1, 10, 10);
  const sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: false,
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.x = 3;
  sphere.position.y = 3;
  scene.add(sphere);
  const animation = () => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // 渲染
    renderer.render(scene, camera);
    requestAnimationFrame(animation);
  };
  animation();
}
