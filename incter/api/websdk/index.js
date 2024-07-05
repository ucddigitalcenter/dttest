import * as module1 from "../model_unity/attributes.js";
const UCDWISDOMSDK = module1.default;

const websdk = {
  // 开启点击
  EnableClick(EnableLayers, callback) {
    return UCDWISDOMSDK._EnableClick(EnableLayers, callback);
  },
  // 点击事件颜色
  SetSelectionInnerColor(r, g, b, a) {
    return UCDWISDOMSDK._SetSelectionInnerColor(r, g, b, a);
  },
  //获取物体信息 int id,string type
  GetPropertyById(id, type) {
    return UCDWISDOMSDK._GetPropertyById(id, type);
  },
  //获取物体所有信息
  GetObjectAllPropertiesById(id) {
    return UCDWISDOMSDK._GetObjectAllPropertiesById(id);
  },
  //设置鼠标覆盖层
  SetHoverLayer(GetLayerss) {
    return UCDWISDOMSDK._SetHoverLayer(GetLayerss.join(" "));
  },
  //清空鼠标覆盖层
  ClearHoverLayer() {
    return UCDWISDOMSDK._ClearHoverLayer();
  },
  //开关鼠标覆盖
  EnableHover(trigger, callback) {
    return UCDWISDOMSDK._EnableHover(trigger, callback);
  },
  //设置点击层
  SetClickLayer(GetLayerss) {
    return UCDWISDOMSDK._SetClickLayer(GetLayerss.join(" "));
  },
  //清空点击层
  ClearClickLayer() {
    return UCDWISDOMSDK._ClearClickLayer();
  },
  // //开关漫游
  // EnableRoaming(EnableRoaminglayers) {
  //   return UCDWISDOMSDK._EnableRoaming(EnableRoaminglayers);
  // },
  //开关拖拽
  EnableDrag(EnableDraglayers, index, callback) {
    return UCDWISDOMSDK._EnableDrag(EnableDraglayers, index, callback);
  },
  //设置拖拽层
  SetDragLayer(GetLayerss) {
    return UCDWISDOMSDK._SetDragLayer(GetLayerss);
  },
  //清空拖拽层
  ClearDragLayer() {
    return UCDWISDOMSDK._ClearDragLayer();
  },
  //显示所有选中的模型
  ShowSelects() {
    return UCDWISDOMSDK._ShowSelects();
  },
  //获取所有显示的模型
  GetShownObjs() {
    return UCDWISDOMSDK._GetShownObjs();
  },
  //显示模型
  ShowObj(id) {
    return UCDWISDOMSDK._ShowObj(id);
  },
  // 只显示选中模型
  ShowSelects(uuid) {
    return UCDWISDOMSDK._ShowSelects(uuid);
  },
  // 隐藏某个模型
  HideObj(uuid) {
    return UCDWISDOMSDK._HideObj(uuid);
  },
  //隐藏所有模型
  HideAllObjs() {
    return UCDWISDOMSDK._HideAllObjs();
  },
  //隐藏模型
  HideObj(id) {
    return UCDWISDOMSDK._HideObj(id);
  },
  //获取所有隐藏的模型
  GetHiddenObjs() {
    return UCDWISDOMSDK._GetHiddenObjs();
  },
  //获取模型信息
  GetComponentsInfo(id) {
    return UCDWISDOMSDK._GetComponentsInfo(id);
  },
  // 射线管理（框选接口实现）
  EnableRectSelect(trigger, callback) {
    return UCDWISDOMSDK._EnableRectSelect(trigger, callback);
  },
  // 获取所有的射线层
  GetLayers() {
    return UCDWISDOMSDK._GetLayers();
  },
  // id转uuid
  ID2UUID(id) {
    return UCDWISDOMSDK._ID2UUID(id);
  },

  // uuid转id
  UUID2ID(uuid) {
    return Number(UCDWISDOMSDK._UUID2ID(uuid));
  },

  // 获取玩家信息
  GetPlayerInfo() {
    return UCDWISDOMSDK._GetPlayerInfo();
  },
  // 开关移动
  EnableMove(value) {
    return UCDWISDOMSDK._EnableMove(value);
  },
  // 设置玩家位置
  SetPlayerPosition(x, y, z) {
    return UCDWISDOMSDK._SetPlayerPosition(x, y, z);
  },
  // 设置玩家旋转
  SetPlayerEuler(x, y, z) {
    return UCDWISDOMSDK._SetPlayerEuler(x, y, z);
  },
  // 设置物体旋转
  SetObjectEuler(id, x, y, z) {
    return UCDWISDOMSDK._SetObjectEuler(id.toString(), x, y, z);
  },
  // 设置物体位置
  SetObjectPosition(id, x, y, z) {
    return UCDWISDOMSDK._SetObjectPosition(id.toString(), x, y, z);
  },

  /*
   *新增04/08（工具栏-画图功能）
   *
   */

  // 新增04/08
  // 添加文本框
  AddInputTextUI(manual, jsonStr, callback) {
    return UCDWISDOMSDK._AddInputTextUI(manual, jsonStr, callback);
  },
  // 画线
  AddLineUI(manual, jsonStr, callback) {
    return UCDWISDOMSDK._AddLineUI(manual, jsonStr, callback);
  },
  // 画框
  AddBoxUI(manual, jsonStr, callback) {
    return UCDWISDOMSDK._AddBoxUI(manual, jsonStr, callback);
  },
  // 画圆环
  AddAnnulusUI(manual, jsonStr, callback) {
    return UCDWISDOMSDK._AddAnnulusUI(manual, jsonStr, callback);
  },
  // 画箭头
  AddArrowUI(manual, jsonStr, callback) {
    return UCDWISDOMSDK._AddArrowUI(manual, jsonStr, callback);
  },
  // 进入创建UI状态
  EnableCreate3DUI(value) {
    return UCDWISDOMSDK._EnableCreate3DUI(value);
  },
  // 开关键盘事件
  EnableKeyboard(value) {
    return UCDWISDOMSDK._EnableKeyboard(value);
  },

  // 测量工具
  // 多段线
  EnableMultiLineTool(value, color, callback) {
    return UCDWISDOMSDK._EnableMultiLineTool(value, color, callback);
  },
  // 角度
  EnableAngleTool(value, callback) {
    return UCDWISDOMSDK._EnableAngleTool(value, callback);
  },
  // 体积
  EnableVolumeTool(value, callback) {
    return UCDWISDOMSDK._EnableVolumeTool(value, callback);
  },
  // 最短距离
  EnableMinDistanceTool(value, callback) {
    return UCDWISDOMSDK._EnableMinDistanceTool(value, callback);
  },
  // 面积
  EnableAreaTool(value, color, callback) {
    return UCDWISDOMSDK._EnableAreaTool(value, color, callback);
  },
  // 长度
  EnableLengthTool(value, callback) {
    return UCDWISDOMSDK._EnableLengthTool(value, callback);
  },

  // 4/22更新接口（动画编辑）
  // 设置灯光
  SetLightData(jsonStr) {
    return UCDWISDOMSDK._SetLightData(jsonStr);
  },
  // 设置天空盒
  SetSkybox(url) {
    return UCDWISDOMSDK._SetSkybox(url);
  },
  // 设置后处理
  SetVolumeData(jsonStr) {
    return UCDWISDOMSDK._SetVolumeData(jsonStr);
  },
  // 开启动画记录
  EnableAnimationRecord(value, callback) {
    return UCDWISDOMSDK._EnableAnimationRecord(value, callback);
  },
  // 开始
  PlayAnimation(value, jsonStr) {
    return UCDWISDOMSDK._PlayAnimation(value, jsonStr);
  },
  // 设置动画帧
  SetAnimationFrame(i) {
    return UCDWISDOMSDK._SetAnimationFrame(i);
  },
  // 删除批注（所有）
  RemoveAllAnnotations() {
    return UCDWISDOMSDK._RemoveAllAnnotations();
  },
  // 添加光源（灯光类型）
  AddLight(i, jsonStr) {
    return UCDWISDOMSDK._AddLight(i, jsonStr);
  },
  // 删除光源
  RemoveAllLights() {
    return UCDWISDOMSDK._RemoveAllLights();
  },

  /**
   * 04/24新增接口*/
  //  设置环境光
  SetEnvironmentLight(jsonStr) {
    return UCDWISDOMSDK._SetEnvironmentLight(jsonStr);
  },
  // 开启场景编辑器记录
  EnableSceneEdit(value) {
    return UCDWISDOMSDK._EnableSceneEdit(value);
  },
  // 导入场景编辑器记录
  ImportSceneTempData() {
    return UCDWISDOMSDK._ImportSceneTempData();
  },

  // 删除批注（关闭）
  CompleteAllAnnotations() {
    return UCDWISDOMSDK._CompleteAllAnnotations();
  },
  // 删除测量数据
  RemoveAllMeasureTools() {
    return UCDWISDOMSDK._RemoveAllMeasureTools();
  },
  // 隐藏测量数据
  HideAllMeasureTools(value) {
    return UCDWISDOMSDK._HideAllMeasureTools(value);
  },
// 设置lod剔除距离
  SetLODsScreenRelativeTransitionHeight(ratio) {
    return UCDWISDOMSDK._SetLODsScreenRelativeTransitionHeight(ratio);
  },

  /**
   *
   * ldt新增接口
   *
   * */

  AllToTransById(id, trans) {
    return UCDWISDOMSDK._AllToTransById(id, trans);
  },
  //将模型所有材质转为实心
  AllToPbrById(id) {
    return UCDWISDOMSDK._AllToPbrById(id);
  },
  //将模型某一个mesh转为透明
  ToTransById(id, num, trans) {
    return UCDWISDOMSDK._ToTransById(id, num, trans);
  },
  ToPbrById(id, num) {
    return UCDWISDOMSDK._ToPbrById(id, num);
  },
  LookAtPos(pos) {
    let Pos = {
      x: pos.x,
      y: pos.y,
      z: pos.z,
    };
    return UCDWISDOMSDK._LookAtPos(Pos);
  },
  ZoomIn() {
    return UCDWISDOMSDK._ZoomIn();
  },
  ZoomOut() {
    return UCDWISDOMSDK._ZoomOut();
  },

  // 04/24新增
  ToPerspective(camId) {
    return UCDWISDOMSDK._ToPerspective(Number(camId));
  },
  ToOrthographic(camId) {
    return UCDWISDOMSDK._ToOrthographic(Number(camId));
  },
  FrontView(camId) {
    return UCDWISDOMSDK._FrontView(Number(camId));
  },
  BackView(camId) {
    return UCDWISDOMSDK._BackView(Number(camId));
  },
  LeftView(camId) {
    return UCDWISDOMSDK._LeftView(Number(camId));
  },
  RightView(camId) {
    return UCDWISDOMSDK._RightView(Number(camId));
  },
  TopView(camId) {
    return UCDWISDOMSDK._TopView(Number(camId));
  },
  BottomView(camId) {
    return UCDWISDOMSDK._BottomView(Number(camId));
  },
  // 6/29
  EnableObservation(value){
    UCDWISDOMSDK._EnableObservation(value);
  },
  ChangeMaterialInfo(id,info){
    let str = JSON.stringify(info);
    UCDWISDOMSDK._ChangeMaterialInfo(id,str);
  },
  StartCrossById(id){
    UCDWISDOMSDK._StartCrossById(Number(id));
  },
  StartCrossByModelRoot(){
    UCDWISDOMSDK._StartCrossByModelRoot();
  },
  RestoreCross(){
    UCDWISDOMSDK._RestoreCross();
  },
  ReCalculateBounds(){
    UCDWISDOMSDK._ReCalculateBounds();
  },

  /**
   *
   * wwj
   * **/
  // 下载单个模型
  LoadGlbAsync(url, onLoad, onProgress, onError, timeout) {
    return UCDWISDOMSDK._LoadGlbAsync(
      url,
      onLoad,
      onProgress,
      onError,
      timeout
    );
  },
  // 设置对象可见不可见
  GameObjSetActive(isActive, instanceID, onMsg) {
    return UCDWISDOMSDK._GameObjSetActive(isActive, instanceID, onMsg);
  },

  /*
   *资源下载-异步 资源查询、资源下载、资源释放接口实现
   *
   */

  // 下载资源
  LoadAndInstantiate(json, onInstantiate, onMsg) {
    // 发送参数
    return UCDWISDOMSDK._LoadAndInstantiate(json, onInstantiate, onMsg);
  },

  // 生成模型
  InstantiateObject(
    url,
    onInstantiatename,
    onInstantiateIDsname,
    onerrorcallback
  ) {
    return UCDWISDOMSDK._InstantiateObject(
      url,
      onInstantiatename,
      onInstantiateIDsname,
      onerrorcallback
    );
  },
  // 卸载AB包
  UnLoadAssetBundle(url, Destroylayer, onerrorcallback) {
    return UCDWISDOMSDK._UnLoadAssetBundle(url, Destroylayer, onerrorcallback);
  },

  // 卸载所有AB包
  UnloadAllAssetBundles(unloadAllObjects, onError) {
    return UCDWISDOMSDK._UnloadAllAssetBundles(unloadAllObjects, onError);
  },

  // 销毁指定ID模型
  DestroyObject(id, onerrorname) {
    return UCDWISDOMSDK._DestroyObject(id, onerrorname);
  },

  // 销毁所有模型
  DestroyAllObject(onerrorname) {
    return UCDWISDOMSDK._DestroyAllObject(onerrorname);
  },
  // 开关行走
  EnableWalk(jsonStr) {
    return UCDWISDOMSDK._EnableWalk(jsonStr);
  },

  // 获取模型包围盒大小
  GetBoundsSizeByID(id) {
    return UCDWISDOMSDK._GetBoundsSizeByID(id.toString());
  },

  // 获取模型包围盒中心
  GetBoundsCenterByID(id) {
    return UCDWISDOMSDK._GetBoundsCenterByID(id.toString());
  },

  // 获取主画布宽高
  GetMainCanvasWH() {
    return UCDWISDOMSDK._GetMainCanvasWH();
  },

  // 开关UI滑动条
  UIAutoFit(UIAutoFitlayers) {
    return UCDWISDOMSDK._UIAutoFit(UIAutoFitlayers);
  },

  // 创建节点
  createElement() {
    return UCDWISDOMSDK._createElement();
  },

  // 添加事件
  addEleEvent() {
    return UCDWISDOMSDK._addEleEvent();
  },

  // 加载
  init() {
    return UCDWISDOMSDK._init();
  },

  //  销毁
  quitUnity1() {
    return UCDWISDOMSDK._quitUnity();
  },
  //  销毁
  onUnmountedunity() {
    return UCDWISDOMSDK._onUnmountedunity();
  },

  // 添加标签
  AddTags(tags, callback) {
    return UCDWISDOMSDK._AddTags(JSON.stringify(tags), callback);
  },

  // 删除单个标签
  RemoveTag(id) {
    return UCDWISDOMSDK._RemoveTag(id);
  },

  // 删除所有标签
  RemoveAllTags() {
    return UCDWISDOMSDK._RemoveAllTags();
  },

  // 更新标签
  UpdateTags(jsonStr, callback) {
    return UCDWISDOMSDK._UpdateTags(JSON.stringify(jsonStr), callback);
  },

  // 1/8新增
  // 设置文字对齐方式 string
  SetTextAlignment(string) {
    return UCDWISDOMSDK._SetTextAlignment(string);
  },

  // 设置字体 string
  SetTextFont(string) {
    return UCDWISDOMSDK._SetTextFont(string);
  },

  // 设置字体
  // , SetTextAlignment() {
  //   _SetTextAlignment();
  // }

  // 设置字体颜色 int int int int
  SetTextColor(r, g, b, a) {
    return UCDWISDOMSDK._SetTextColor(r, g, b, a);
  },

  // 设置字体大小 float
  SetTextSize(float) {
    return UCDWISDOMSDK._SetTextSize(float);
  },

  // 设置线路宽度 float
  SetRouteWidth(float) {
    return UCDWISDOMSDK._SetRouteWidth(float);
  },
  // 设置线路颜色 int int int int
  SetRouteColor(r, g, b, a) {
    return UCDWISDOMSDK._SetRouteColor(r, g, b, a);
  },

  // 设置线路材质 string
  SetRouteMaterial(string) {
    return UCDWISDOMSDK._SetRouteMaterial(string);
  },
  //设置线路显隐 bool
  SetRouteVisible(boolean) {
    return UCDWISDOMSDK._SetRouteVisible(boolean);
  },

  //设置导航速度 float
  SetRoamSpeed(float) {
    return UCDWISDOMSDK._SetRoamSpeed(float);
  },
  //暂停导航 bool
  PauseRoam(boolean) {
    return UCDWISDOMSDK._PauseRoam(boolean);
  },
  //结束导航
  EndRoam() {
    return UCDWISDOMSDK._EndRoam();
  },
  //改变导航点位 int
  ChangeRoamPoint(int) {
    return UCDWISDOMSDK._ChangeRoamPoint(int);
  },
  //导航到达点位回调 string
  RoamArriveEvent(callback) {
    return UCDWISDOMSDK._RoamArriveEvent(callback);
  },
  //开始导航 string
  StartRoam(string) {
    return UCDWISDOMSDK._StartRoam(JSON.stringify(string));
  },

  // 1/8合并代码
  //设置属性信息
  SetPropertyById(id, type, value) {
    if (typeof value == typeof true) {
      if (value == true) {
        value = "True";
      } else {
        value = "False";
      }
    }
    UCDWISDOMSDK._SetPropertyById(id, type, value);
  },
  //根据名字获取id
  GetObjectByName(name) {
    return UCDWISDOMSDK._GetObjectByName(name);
  },

  //根据layer获取id
  GetObjectByLayer(layer) {
    return UCDWISDOMSDK._GetObjectByLayer(layer);
  },

  //根据type获取id
  GetObjectByType(type) {
    console.log(type);
    return UCDWISDOMSDK._GetObjectByType(type);
  },

  //根据id获取子物体的id
  GetObjectChilds(id) {
    return UCDWISDOMSDK._GetObjectChilds(id);
  },

  //添加Object
  AddObject(type, parentId, position, rotation, scale) {
    var pos = {
      x: position.x,
      y: position.y,
      z: position.z,
    };
    var rot = {
      x: rotation.x,
      y: rotation.y,
      z: rotation.z,
    };
    var sca = {
      x: scale.x,
      y: scale.y,
      z: scale.z,
    };
    var data = {
      type: type,
      Id: parentId,
      position: pos,
      eulerAngle: rot,
      localScale: sca,
    };
    return UCDWISDOMSDK._AddObject(data);
  },

  //克隆对象
  CloneObject(id, parentId, includeChilds) {
    if ((includeChilds = null)) {
      includeChilds = true;
    }
    let cloneid = UCDWISDOMSDK._CloneObject(id, parentId, includeChilds);
    return cloneid;
  },

  //平滑移动
  DoMove(id, pos, duration) {
    var endpos = {
      x: pos.x,
      y: pos.y,
      z: pos.z,
    };
    return UCDWISDOMSDK._DoMove(id, endpos, duration);
  },
  //平滑移动
  DoLocalMove(id, pos, duration) {
    var endpos = {
      x: pos.x,
      y: pos.y,
      z: pos.z,
    };
    return UCDWISDOMSDK._DoLocalMove(id, endpos, duration);
  },
  //平滑旋转
  DoRotate(id, Rot, duration) {
    var endRot = {
      x: Rot.x,
      y: Rot.y,
      z: Rot.z,
    };
    return UCDWISDOMSDK._DoRotate(id, endRot, duration);
  },
  //平滑旋转
  DoLocalRotate(id, Rot, duration) {
    var endRot = {
      x: Rot.x,
      y: Rot.y,
      z: Rot.z,
    };
    return UCDWISDOMSDK._DoLocalRotate(id, endRot, duration);
  },
  //平滑缩放
  DoLocalScale(id, value, duration) {
    let endValue = {
      x: value.x,
      y: value.y,
      z: value.z,
    };
    return UCDWISDOMSDK._DoLocalScale(id, endValue, duration);
  },
  //获取主相机Id
  GetMainCameraId() {
    let camid = UCDWISDOMSDK._GetMainCameraId();
    return Number(camid);
  },
  //根据相机Id，获取渲染的layer
  GetCullingMask(id) {
    return UCDWISDOMSDK._GetCullingMask(Number(id));
  },
  //设置某id相机渲染的layers
  SetCullingMask(id, layers) {
    return UCDWISDOMSDK._SetCullingMask(Number(id), [layers]);
  },
  //给某id相机添加一个渲染的layer
  AddCullingMask(id, layer) {
    return UCDWISDOMSDK._AddCullingMask(Number(id), layer);
  },
  //给某id相机移除一个渲染的layer
  RemoveCullingMask(id, layer) {
    return UCDWISDOMSDK._RemoveCullingMask(Number(id), layer);
  },
  //看向某个object
  FocusObject(id, cameraId) {
    return UCDWISDOMSDK._FocusObject(id, Number(cameraId));
  },
  //看向某个object
  FocusObjectOffset(id, cameraId, pos, Rot) {
    Rot ? Rot : null;
    let offsetPos = {
      x: pos.x,
      y: pos.y,
      z: pos.z,
    };
    let offsetRot = null;
    if (Rot != null) {
      offsetRot = {
        x: Rot.x,
        y: Rot.y,
        z: Rot.z,
      };
    }
    return UCDWISDOMSDK._FocusObjectOffset(id, cameraId, offsetPos, offsetRot);
  },
  //高亮某个object
  HighLightById(id, isHighLight, highlightType, highlightData) {
    let color = null;
    if (highlightData.color != null) {
      color = {
        r: highlightData.color.r,
        g: highlightData.color.g,
        b: highlightData.color.b,
        a: highlightData.color.a,
      };
    }
    let datas = {
      _intensity: highlightData.intensity,
      _isOn: highlightData.isOn,
      _color: color,
      _width: highlightData.width,
      _speed: highlightData.speed,
      _texture: highlightData.texture,
      _blending: highlightData.blending,
      _initialScale: highlightData.initialScale,
      _endScale: highlightData.endScale,
      _noise: highlightData.noise,
    };
    return UCDWISDOMSDK._HighLightById(id, isHighLight, highlightType, datas);
  },

  Downloade(url) {
    return UCDWISDOMSDK._Downloade(url);
  },

  InitModel(json, callback) {
    return UCDWISDOMSDK._InitModel(JSON.stringify(json), callback);
  },
  AllToTransById(id, trans) {
    return UCDWISDOMSDK._AllToTransById(id, trans);
  },
  AllToPbrById(id) {
    return UCDWISDOMSDK._AllToPbrById(id);
  },
  ToTransById(id, num, trans) {
    return UCDWISDOMSDK._ToTransById(id, num, trans);
  },
  ToPbrById(id, num) {
    return UCDWISDOMSDK._ToPbrById(id, num);
  },

  // 开关鼠标

  EnableMove(flag) {
    return UCDWISDOMSDK._EnableMove(flag);
  },
};

export default websdk;
