/** 封装unity接口***/
var Layerss;
var unitygameinstance = null;
var url;
var blob;
var bytes;
var list;
var data;
var module1 = {
  data: null,
  loadcallback: null,
  // 打开
  // _EnableClick(Layers, callback) {
  //   window.unitygameinstance.Module._EnableClick(Layers, callback);
  // },
  // 打开
  _EnableClick(Layers, callback) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableClick",
        "vii",
        [typeof EnableLayers, typeof callback],
        [Layers, callback]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 高光
  _HighLightById(id, isHighLight, highlightType, highlightData) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "HighLightById",
        "iiiii",
        [
          typeof id,
          typeof isHighLight,
          typeof highlightType,
          typeof JSON.stringify(highlightData),
        ],
        [id, isHighLight, highlightType, JSON.stringify(highlightData)]
      );
    } catch (error) {
      console.log(error);
    }
  },

  //获取物体信息 int id,string type
  // _GetPropertyById(id, type) {
  //   Layerss = window.unitygameinstance.Module._GetPropertyById(id, type);
  //   return Layerss;
  // },
  _GetPropertyById(id, type) {
    try {
      let msg = window.unitygameinstance.Module.DynCallCSFunc(
        "GetPropertyById",
        "iii",
        [typeof id, typeof type],
        [id, type]
      );
      console.log(new Array(msg));
      return new Array({ name: msg.split("[") });
    } catch (error) {
      console.log(error);
    }
  },

  //获取物体所有信息
  // _GetObjectAllPropertiesById(id) {
  //   Layerss = window.unitygameinstance.Module._GetObjectAllPropertiesById(id);
  //   return Layerss;
  // },

  _GetObjectAllPropertiesById(id) {
    try {
      let msg = window.unitygameinstance.Module.DynCallCSFunc(
        "GetObjectAllPropertiesById",
        "ii",
        [typeof id],
        [id]
      );
      return JSON.parse(JSON.stringify(msg));
    } catch (error) {
      console.log(error);
    }
  },
  //设置鼠标覆盖层
  // _SetHoverLayer(Layerss) {
  //   window.unitygameinstance.Module._SetHoverLayer(Layerss);
  // },

  _SetHoverLayer(Layerss) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetHoverLayer",
        "vi",
        [typeof Layerss],
        [Layerss]
      );
    } catch (error) {
      console.log(error);
    }
  },

  //清空鼠标覆盖层
  // _ClearHoverLayer() {
  //   window.unitygameinstance.Module._ClearHoverLayer();
  // },

  _ClearHoverLayer() {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "ClearHoverLayer",
        "v",
        [],
        []
      );
    } catch (error) {
      console.log(error);
    }
  },

  //开关滑过
  // _EnableHover(trigger, callback) {
  //   window.unitygameinstance.Module._EnableHover(trigger, callback);
  // },

  _EnableHover(trigger, callback) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableHover",
        "vii",
        [typeof trigger, typeof callback],
        [trigger, callback]
      );
    } catch (error) {
      console.log(error);
    }
  },

  //设置点击层
  // _SetClickLayer(Layerss) {
  //   window.unitygameinstance.Module._SetClickLayer(Layerss);
  // },

  _SetClickLayer(Layerss) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetClickLayer",
        "vi",
        [typeof Layerss],
        [Layerss]
      );
    } catch (error) {
      console.log(error);
    }
  },

  //清空点击层
  // _ClearClickLayer() {
  //   window.unitygameinstance.Module._ClearClickLayer();
  // },
  _ClearClickLayer() {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "ClearClickLayer",
        "v",
        [],
        []
      );
    } catch (error) {
      console.log(error);
    }
  },
  //开关漫游
  // _EnableRoaming(EnableRoaminglayers) {
  //   window.unitygameinstance.Module._EnableRoaming(EnableRoaminglayers);
  // },

  // _EnableRoaming(Layers) {
  //   try {
  //     window.unitygameinstance.Module.DynCallCSFunc(
  //       "EnableRoaming",
  //       "vi",
  //       [typeof Layers],
  //       [Layers]
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },

  //开关拖拽
  // _EnableDrag(EnableDraglayers) {
  //   console.log(EnableDraglayers);
  //   window.unitygameinstance.Module._EnableDrag(EnableDraglayers);
  // },

  _EnableDrag(Layerss, index, callback) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableDrag",
        "viii",
        [typeof Layerss, typeof index, typeof callback],
        [Layerss, index, callback]
      );
    } catch (error) {
      console.log(error);
    }
  },

  //设置拖拽层
  // _SetDragLayer(Layerss) {
  //   window.unitygameinstance.Module._SetDragLayer(Layerss);
  // },

  _SetDragLayer(Layers) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetDragLayer",
        "vi",
        [typeof Layers],
        [Layers]
      );
    } catch (error) {
      console.log(error);
    }
  },

  //清空拖拽层
  // _ClearDragLayer() {
  //   window.unitygameinstance.Module._ClearDragLayer();
  // },

  _ClearDragLayer() {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "ClearDragLayer",
        "v",
        [],
        []
      );
    } catch (error) {
      console.log(error);
    }
  },
  //显示所有选中的模型
  // _ShowSelects() {
  //   window.unitygameinstance.Module._ShowSelects();
  // },

  _ShowSelects() {
    try {
      window.unitygameinstance.Module.DynCallCSFunc("ShowSelects", "v", [], []);
    } catch (error) {
      console.log(error);
    }
  },

  //获取所有显示的模型
  // _GetShownObjs() {
  //   window.unitygameinstance.Module._GetShownObjs();
  // },

  _GetShownObjs() {
    try {
      let ShowObjs = window.unitygameinstance.Module.DynCallCSFunc(
        "GetShownObjs",
        "i",
        [],
        []
      );
      console.log(ShowObjs);
      return JSON.parse(JSON.stringify(ShowObjs));
    } catch (error) {
      console.log(error);
    }
  },
  //显示模型
  // _ShowObj(id) {。
  //   window.unitygameinstance.Module._ShowObj(id);
  // },
  _ShowObj(id) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "ShowObj",
        "vi",
        [typeof id],
        [id]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 只显示选中模型
  _ShowSelects(uuid) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "ShowSelects",
        "vi",
        [typeof uuid],
        [uuid]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 隐藏某个模型
  _HideObj(uuid) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "HideObj",
        "vi",
        [typeof uuid],
        [uuid]
      );
    } catch (error) {
      console.log(error);
    }
  },
  //隐藏所有模型
  // _HideAllObjs() {
  //   window.unitygameinstance.Module._HideAllObjs();
  // },

  _HideAllObjs() {
    try {
      window.unitygameinstance.Module.DynCallCSFunc("HideAllObjs", "v", [], []);
    } catch (error) {
      console.log(error);
    }
  },
  //隐藏模型
  // _HideObj(id) {
  //   window.unitygameinstance.Module._HideObj(id);
  // },

  _HideObj(id) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "HideObj",
        "vi",
        [typeof id],
        [id]
      );
    } catch (error) {
      console.log(error);
    }
  },

  //获取所有隐藏的模型
  // _GetHiddenObjs() {
  //   window.unitygameinstance.Module._GetHiddenObjs();
  // },

  _GetHiddenObjs() {
    try {
      let HideObjs = window.unitygameinstance.Module.DynCallCSFunc(
        "GetHiddenObjs",
        "i",
        [],
        []
      );
      console.log(JSON.parse(JSON.stringify(HideObjs)));
      return JSON.parse(JSON.stringify(HideObjs));
    } catch (error) {
      console.log(error);
    }
  },

  //获取模型信息
  // _GetComponentsInfo(id) {
  //   return window.unitygameinstance.Module._GetComponentsInfo(id);
  // },

  _GetComponentsInfo(id) {
    try {
      let reslove = window.unitygameinstance.Module.DynCallCSFunc(
        "GetComponentsInfo",
        "ii",
        [typeof id],
        [id]
      );
      console.log(reslove);
      return reslove;
    } catch (error) {
      console.log(error);
    }
  },

  // 射线管理（框选接口实现）
  // _EnableRectSelect(trigger, callback) {
  //   window.unitygameinstance.Module._EnableRectSelect(trigger, callback);
  // },

  _EnableRectSelect(trigger, callback) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableRectSelect",
        "vii",
        [typeof trigger, typeof callback],
        [trigger, callback]
      );
    } catch (error) {
      console.log(error);
    }
  },

  // 获取所有的射线层
  // _GetLayers() {
  //   return (Layerss = window.unitygameinstance.Module._GetLayers());
  // },

  _GetLayers() {
    try {
      let layerlist = window.unitygameinstance.Module.DynCallCSFunc(
        "GetLayers",
        "i",
        [],
        []
      );
      return layerlist;
    } catch (error) {
      console.log(error);
    }
  },

  // id转uuid
  _ID2UUID(id) {
    try {
      let UUID = window.unitygameinstance.Module.DynCallCSFunc(
        "ID2UUID",
        "ii",
        [typeof id],
        [id]
      );
      console.log(JSON.parse(JSON.stringify(UUID)));
      return JSON.parse(JSON.stringify(UUID));
    } catch (error) {
      console.log(error);
    }
  },
  // uuid转id
  _UUID2ID(uuid) {
    try {
      let ID = window.unitygameinstance.Module.DynCallCSFunc(
        "UUID2ID",
        "ii",
        [typeof uuid],
        [uuid]
      );
      console.log(JSON.parse(JSON.stringify(ID)));
      return JSON.parse(JSON.stringify(ID));
    } catch (error) {
      console.log(error);
    }
  },

  // 获取玩家信息
  _GetPlayerInfo() {
    try {
      let Info = window.unitygameinstance.Module.DynCallCSFunc(
        "GetPlayerInfo",
        "i",
        [],
        []
      );
      console.log(JSON.parse(JSON.stringify(Info)));
      return JSON.parse(JSON.stringify(Info));
    } catch (error) {
      console.log(error);
    }
  },

  // EnableMove(bool value) 开关移动
  _EnableMove(value) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableMove",
        "vi",
        [typeof value],
        [value]
      );
    } catch (error) {
      console.log(error);
    }
  },

  // SetPlayerPosition(float x, float y, float z) 设置玩家位置

  _SetPlayerPosition(x, y, z) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetPlayerPosition",
        "vfff",
        [typeof x, typeof y, typeof z],
        [x, y, z]
      );
    } catch (error) {
      console.log(error);
    }
  },

  // SetPlayerEuler(float x, float y, float z) 设置玩家旋转
  _SetPlayerEuler(x, y, z) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetPlayerEuler",
        "vfff",
        [typeof x, typeof y, typeof z],
        [x, y, z]
      );
    } catch (error) {
      console.log(error);
    }
  },

  // SetObjectEuler(string id, float x, float y, float z) 设置物体旋转
  _SetObjectEuler(id, x, y, z) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetObjectEuler",
        "vifff",
        [typeof id, typeof x, typeof y, typeof z],
        [id, x, y, z]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // SetObjectPosition(string id, float x, float y, float z) 设置物体位置
  _SetObjectPosition(id, x, y, z) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetObjectPosition",
        "vifff",
        [typeof id, typeof x, typeof y, typeof z],
        [id, x, y, z]
      );
    } catch (error) {
      console.log(error);
    }
  },

  // 加载单个模型

  _LoadAndInstantiate(json, onInstantiate, onMsg) {
    try {
      window.unitygameinstance.Model.Destroylayer(
        "LoadAndInstantiate",
        "viii",
        [typeof json, typeof onInstantiate, typeof onMsg],
        [json, onInstantiate, onMsg]
      );
    } catch (error) {}
  },
  _InstantiateObject(url, onInstantiate, onInstantiateIDs, onError) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "InstantiateObject",
        "viiii",
        [
          typeof url,
          typeof onInstantiate,
          typeof onInstantiateIDs,
          typeof onError,
        ],
        [url, onInstantiate, onInstantiateIDs, onError]
      );
    } catch (error) {
      console.log(error);
    }
  },

  // 卸载AB包
  /******** 之前的 **************/
  // _UnLoadAssetBundle(url, Destroylayer, onerrorname) {
  //   window.unitygameinstance.Module._UnLoadAssetBundle(url, Destroylayer, onerrorname);
  // },
  /********现在的***********/
  _UnLoadAssetBundle(url, Destroylayer, onError) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "UnLoadAssetBundle",
      "viii",
      [typeof url, typeof Destroylayer, typeof onError],
      [url, Destroylayer, onError]
    );
  },

  // 卸载所有AB包
  // _UnloadAllAssetBundles(url, Destroylayer, onerrorname) {
  //   window.unitygameinstance.Module._UnloadAllAssetBundles(
  //     url,
  //     Destroylayer,
  //     onerrorname
  //   );
  // },

  _UnloadAllAssetBundles(unloadAllObjects, onError) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "UnloadAllAssetBundlesCS",
      "vii",
      [typeof unloadAllObjects, typeof onError],
      [unloadAllObjects, onError]
    );
  },

  // 销毁指定ID模型
  // _DestroyObject(id, onerrorname) {
  //   id
  //     ? id.map((item) => {
  //         window.unitygameinstance.Module._DestroyObject(item, onerrorname);
  //       })
  //     : alert("未成功获取id");
  // },

  _DestroyObject(id, onError) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "DestroyObject",
      "vii",
      [typeof id, typeof onError],
      [id, onError]
    );
  },

  // 销毁所有模型
  // _DestroyAllObject(onerrorname) {
  //   window.unitygameinstance.Module._DestroyAllObject(onerrorname);
  // },

  _DestroyAllObject(onError) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "DestroyAllObject",
      "vi",
      [typeof onError],
      [onError]
    );
  },

  // 开关漫游
  // _EnableWalk(EnableWalklayers) {
  //   window.unitygameinstance.Module._EnableWalk(EnableWalklayers);
  // },
  // EnableRoamManualDot(bool value, string , string callback)
  _EnableWalk(jsonStr) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "EnableWalk",
      "vi",
      [typeof jsonStr],
      [jsonStr]
    );
  },

  // 获取模型包围盒大小
  // _GetBoundsSizeByID(id) {
  //   return (GetBoundsSizeByIDdata =
  //     window.unitygameinstance.Module._GetBoundsSizeByID(id));
  // },

  _GetBoundsSizeByID(id) {
    let nodeList = window.unitygameinstance.Module.DynCallCSFunc(
      "GetBoundsSizeByID",
      "ii",
      [typeof id],
      [id]
    );
    console.log(JSON.parse(JSON.stringify(nodeList)));
    return JSON.parse(JSON.stringify(nodeList));
  },

  // 获取模型包围盒中心
  // _GetBoundsCenterByID(id) {
  //   return (GetBoundsCenterByIDdata =
  //     window.unitygameinstance.Module._GetBoundsCenterByID(id));
  // },

  _GetBoundsCenterByID(id) {
    let res = window.unitygameinstance.Module.DynCallCSFunc(
      "GetBoundsCenterByID",
      "ii",
      [typeof id],
      [id]
    );
    console.log(JSON.parse(JSON.stringify(res)));
    return JSON.parse(JSON.stringify(res));
  },

  // 获取主画布宽高
  // _GetMainCanvasWH() {
  //   return (GetMainCanvasWHdata = window.unitygameinstance.Module._GetMainCanvasWH());
  // },

  _GetMainCanvasWH(id) {
    let CanvasWH = window.unitygameinstance.Module.DynCallCSFunc(
      "GetMainCanvasWH",
      "ii",
      [typeof id],
      [id]
    );
    return JSON.parse(JSON.stringify(CanvasWH));
  },

  // 开关UI滑动条
  // _UIAutoFit(UIAutoFitlayers) {
  //   window.unitygameinstance.Module._UIAutoFit(UIAutoFitlayers);
  // },

  _UIAutoFit(UIAutoFitlayers) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "UIAutoFit",
      "vi",
      [typeof UIAutoFitlayers],
      [UIAutoFitlayers]
    );
  },

  // 加载动画
  _createElement() {
    let divEles = document.getElementById("UCDunity");
    divEles.innerHTML = `<div class="unity-con" style="width:100%;height:100%">
    <div id="unity-container" class="unity-desktop" style="width:100%;height:100%">
      <canvas id="unity-canvas" width=960 height=600 tabindex="-1"></canvas>
      <div id="unity-loading-bar">
        <div id="unity-logo"></div>
        <div id="unity-progress-bar-empty">
          <div id="unity-progress-bar-full"></div>
        </div>
      </div>
    </div>
  </div>`;
    divEles.parentNode.appendChild(divEles);
    divEles = divEles;
  },

  _addEleEvent() {
    var container = document.querySelector("#unity-container");
    var canvas = document.querySelector("#unity-canvas");
    var loadingBar = document.querySelector("#unity-loading-bar");
    var progressBarFull = document.querySelector("#unity-progress-bar-full");
    var fullscreenButton = document.querySelector("#unity-fullscreen-button");
    var warningBanner = document.querySelector("#unity-warning");

    // Shows a temporary message banner/ribbon for a few seconds, or
    // a permanent error message on top of the canvas if type=='error'.
    // If type=='warning', a yellow highlight color is used.
    // Modify or remove this function to customize the visually presented
    // way that non-critical warnings and error messages are presented to the
    // user.
    function unityShowBanner(msg, type) {
      function updateBannerVisibility() {
        warningBanner.style.display = warningBanner.children.length
          ? "block"
          : "none";
      }
      var div = document.createElement("div");
      div.innerHTML = msg;
      warningBanner.appendChild(div);
      if (type == "error") div.style = "background: red; padding: 10px;";
      else {
        if (type == "warning") div.style = "background: yellow; padding: 10px;";
        setTimeout(function () {
          warningBanner.removeChild(div);
          updateBannerVisibility();
        }, 5000);
      }
      updateBannerVisibility();
    }
    var loaderUrl = "./incter/api/model_unity/unity/Build/UnityMain.loader.js";
    var config = {
      dataUrl: "./incter/api/model_unity/unity/Build/UnityMain.data",
      frameworkUrl:
        "./incter/api/model_unity/unity/Build/UnityMain.framework.js",
      codeUrl: "./incter/api/model_unity/unity/Build/UnityMain.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "BIMEngine",
      productVersion: "0.1.0",
      showBanner: unityShowBanner,
      cacheControl: function (url) {
        // Caching enabled for .data and .bundle files.
        // Revalidate if file is up to date before loading from cache
        if (url.match(/\.data/) || url.match(/\.bundle/)) {
          return "must-revalidate";
        } // Caching enabled for .mp4 and .custom files // Load file from cache without revalidation. //debugger

        if (
          url.match(/\.mp4/) ||
          url.match(/\.custom/) ||
          url.match(/\.wasm/) ||
          url.match(/\.data/)
        ) {
          return "immutable";
        } // Disable explicit caching for all other files. // Note: the default browser cache may cache them anyway.

        return "no-store";
      },
    };
    // By default, Unity keeps WebGL canvas render target size matched with
    // the DOM size of the canvas element (scaled by window.devicePixelRatio)
    // Set this to false if you want to decouple this synchronization from
    // happening inside the engine, and you would instead like to size up
    // the canvas DOM size and WebGL render target sizes yourself.
    // config.matchWebGLToCanvasSize = false;

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      // Mobile device style: fill the whole browser client area with the game canvas:

      var meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content =
        "width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes";
      document.getElementsByTagName("head")[0].appendChild(meta);

      canvas.className = "unity-mobile";

      // To lower canvas resolution on mobile devices to gain some
      // performance, uncomment the following line:
      // config.devicePixelRatio = 1;
    } else {
      // Desktop style: Render the game canvas in a window that can be maximized to fullscreen:

      canvas.style.width = 100 + "%";
      canvas.style.height = 100 + "%";
    }
    loadingBar.style.display = "block";
    var script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
      var canvas = document.querySelector("#unity-canvas");
      createUnityInstance(canvas, config, this.UnityLoading)
        .then((unityInstance) => {
          // console.log(window.unitygameinstance,'dwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
          window.unitygameinstance = unityInstance;
          //  console.log(window.unitygameinstance,"dwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
          loadingBar.style.display = "none";
          // 管道
        })
        .catch((message) => {
          alert(message);
        });
    };
    document.body.appendChild(script);
  },
  unityloadpro: null,
  UnityLoading(progress) {
    module1.unityloadpro = progress;
    console.log("", module1.unityloadpro);
  },

  _init() {
    this._createElement();
    this._addEleEvent();
  },

  // 销毁
  _quitUnity() {
    window.unitygameinstance.Quit(function () {
      console.log("quit done!");
    });
    window.unitygameinstance = null;
    var canvas = document.querySelector("#unity-canvas");
    canvas.remove();
    canvas = null;
    this._createElement();
    this._addEleEvent();
  },

  InitQueue: {
    isBusy: false,
    queue: [],
    activeQueue: [],
    maxActive: 1,
  },

  modelInfoDict: new Map(),

  _onUnmountedunity() {
    window.unitygameinstance.Quit(function () {
      console.log("quit done!");
    });
    window.unitygameinstance = null;
    var canvas = document.querySelector("#unity-canvas");
    canvas.remove();
    canvas = null;
    this.InitQueue = {
      isBusy: false,
      queue: [],
      activeQueue: [],
      maxActive: 1,
    };
    this.modelInfoDict = new Map();
  },

  // 1/8新增
  // 设置文字对齐方式 string
  // _SetTextAlignment() {
  //   window.unitygameinstance.Module._SetTextAlignment();
  // },
  /**
   * 
   *
   *   TopLeft
        Top
        TopRight
        TopJustified
        TopFlush
        TopGeoAligned
        Left
        Center
        Right
        Justified
        Flush
        CenterGeoAligned
        BottomLeft
        Bottom
        BottomRight
        BottomJustified
        BottomFlush
        BottomGeoAligned
        BaselineLeft
        Baseline
        BaselineRight
        BaselineJustified
        BaselineFlush
        BaselineGeoAligned
        MidlineLeft
        Midline
        MidlineRight
        MidlineJustified
        MidlineFlush
        MidlineGeoAligned 
        CaplineLeft
        Capline
        CaplineRight
        CaplineJustified
        CaplineFlush
        CaplineGeoAligned
        Converted
   */

  // AddTags添加标签

  _AddTags(tags, callback) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "AddTags",
      "vii",
      [typeof "", typeof callback],
      [tags, callback]
    );
  },
  // 删除单个标签
  _RemoveTag(id) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "RemoveTag",
      "vi",
      [typeof id],
      [id]
    );
  },
  // 删除所有标签
  _RemoveAllTags() {
    window.unitygameinstance.Module.DynCallCSFunc("RemoveAllTags", "v", [], []);
  },
  // 更新标签
  _UpdateTags(jsonStr, callback) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "UpdateTags",
      "vii",
      [typeof jsonStr, typeof callback],
      [jsonStr, callback]
    );
  },

  // 设置文字对齐方式
  _SetTextAlignment(type) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "UIAutoFit",
      "vi",
      [typeof type],
      [type]
    );
  },

  // 设置字体 string
  _SetTextFont(filestring) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "SetTextFont",
      "vi",
      [typeof filestring],
      [filestring]
    );
  },

  // 设置字体颜色 int int int int
  _SetTextColor(r, g, b, a) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "SetTextColor",
      "viiii",
      [typeof r, typeof g, typeof b, typeof a],
      [r, g, b, a]
    );
  },

  // 设置字体大小 float
  _SetTextSize(float) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "SetTextSize",
      "vf",
      [typeof float],
      [float]
    );
  },

  // 设置线路宽度 float
  _SetRouteWidth(float) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "SetRouteWidth",
      "vf",
      [typeof float],
      [float]
    );
  },
  // 设置线路颜色 int int int int
  _SetRouteColor(r, g, b, a) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "SetRouteColor",
      "viiii",
      [typeof r, typeof g, typeof b, typeof a],
      [r, g, b, a]
    );
  },

  // 设置事件颜色 int int int int
  _SetSelectionInnerColor(r, g, b, a) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "SetSelectionInnerColor",
      "viiii",
      [typeof r, typeof g, typeof b, typeof a],
      [r, g, b, a]
    );
  },

  // 设置线路材质 string
  _SetRouteMaterial(string) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "SetRouteMaterial",
      "vi",
      [typeof string],
      [string]
    );
  },
  //设置线路显隐 bool
  _SetRouteVisible(boolean) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "SetRouteVisible",
      "vi",
      [typeof boolean],
      [boolean]
    );
  },

  //设置导航速度 float
  _SetRoamSpeed(float) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "SetRoamSpeed",
      "vf",
      [typeof float],
      [float]
    );
  },
  //暂停导航 bool
  // _PauseRoam() {
  //   window.unitygameinstance.Module._PauseRoam();
  // },

  _PauseRoam(boolean) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "PauseRoam",
      "vi",
      [typeof boolean],
      [boolean]
    );
  },
  //结束导航
  _EndRoam() {
    window.unitygameinstance.Module.DynCallCSFunc("EndRoam", "v", [], []);
  },
  //改变导航点位 int
  _ChangeRoamPoint(int) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "ChangeRoamPoint",
      "vi",
      [typeof int],
      [int]
    );
  },
  //导航到达点位回调 string
  _RoamArriveEvent(callback) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "RoamArriveEvent",
      "vi",
      [typeof callback],
      [callback]
    );
  },
  //开始导航 string
  _StartRoam(string) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "StartRoam",
      "vi",
      [typeof string],
      [string]
    );
  },
  // lidongting
  //设置属性信息
  // _SetPropertyById(id, type, value) {
  //   window.unitygameinstance.Module._SetPropertyById(id, type, value);
  // },
  _SetPropertyById(id, type, value) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "SetPropertyById",
      "iiii",
      [typeof id, typeof type, typeof value],
      [id, type, value]
    );
  },

  //根据名字获取id
  // _GetObjectByName(name) {
  //   var id = window.unitygameinstance.Module._GetObjectByName(name);
  //   var ids = JSON.parse(JSON.stringify(id));
  //   return ids;
  // },

  _GetObjectByName(name) {
    let msg = window.unitygameinstance.Module.DynCallCSFunc(
      "GetObjectByName",
      "ii",
      [typeof name],
      [name]
    );

    return msg;
  },

  //根据layer获取id
  // _GetObjectByLayer(layer) {
  //   var id = window.unitygameinstance.Module._GetObjectByLayer(layer);
  //   console.log(id);
  //   var ids = JSON.parse(JSON.stringify(id));
  //   return ids;
  // },

  _GetObjectByLayer(layer) {
    let msg = window.unitygameinstance.Module.DynCallCSFunc(
      "GetObjectByLayer",
      "ii",
      [typeof layer],
      [layer]
    );
    return msg;
  },

  //根据type获取id
  // _GetObjectByType(type) {
  //   var id = window.unitygameinstance.Module._GetObjectByType(type);
  //   console.log(id);
  //   var ids = newArray(msg).stringify(id));
  //   return ids;
  // },

  _GetObjectByType(type) {
    let msg = window.unitygameinstance.Module.DynCallCSFunc(
      "GetObjectByType",
      "ii",
      [typeof type],
      [type]
    );
    // console.log(msg, new Array(JSON.parse(JSON.stringify(msg))));
    return new Array(JSON.parse(JSON.stringify(msg)));
  },
  //根据id获取子物体的id
  // _GetObjectChilds(id) {
  //   var id = window.unitygameinstance.Module._GetObjectChilds(id);
  //   console.log(id);
  //   var ids = JSON.parse(JSON.stringify(id));
  //   return ids;
  // },

  _GetObjectChilds(id) {
    let msg = window.unitygameinstance.Module.DynCallCSFunc(
      "GetObjectChilds",
      "ii",
      [typeof id],
      [id]
    );
    console.log(JSON.parse(JSON.stringify(msg)));
    return JSON.parse(JSON.stringify(msg));
  },

  //添加Object
  // _AddObject(type, parentId, position, rotation, scale) {
  //   var pos = {
  //     x: position.x,
  //     y: position.y,
  //     z: position.z,
  //   };
  //   var rot = {
  //     x: rotation.x,
  //     y: rotation.y,
  //     z: rotation.z,
  //   };
  //   var sca = {
  //     x: scale.x,
  //     y: scale.y,
  //     z: scale.z,
  //   };
  //   var data = {
  //     type: type,
  //     Id: parentId,
  //     position: pos,
  //     eulerAngle: rot,
  //     localScale: sca,
  //   };
  //   window.unitygameinstance.Module._AddObject(JSON.stringify(data));
  // },

  _AddObject(type, parentId, position, rotation, scale) {
    if (type && parentId && position && rotation && scale) {
      alert("参数确少");
    } else {
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
      window.unitygameinstance.Module.DynCallCSFunc(
        "AddObject",
        "vi",
        [typeof data],
        [JSON.stringify(data)]
      );
    }
  },

  //克隆对象
  // _CloneObject(id, parentId, includeChilds) {
  //   window.unitygameinstance.Module._CloneObject(id, parentId, includeChilds);
  // },

  _CloneObject(id, parentId, includeChilds) {
    let cloneid = window.unitygameinstance.Module.DynCallCSFunc(
      "CloneObject",
      "iiii",
      [typeof id, typeof parentId, typeof includeChilds],
      [id, parentId, includeChilds]
    );
    return Number(cloneid);
  },

  //平滑移动
  // _DoMove(id, pos, duration) {
  //   var endpos = {
  //     x: pos.x,
  //     y: pos.y,
  //     z: pos.z,
  //   };
  //   window.unitygameinstance.Module._DoMove(id, JSON.stringify(endpos), duration);
  // },

  _DoMove(id, pos, duration) {
    var endpos = { x: pos.x, y: pos.y, z: pos.z };
    window.unitygameinstance.Module.DynCallCSFunc(
      "DoMove",
      "iiif",
      [typeof id, typeof JSON.stringify(endpos), typeof duration],
      [id, JSON.stringify(endpos), duration]
    );
  },
  //平滑移动
  // _DoLocalMove(id, pos, duration) {
  //   var endpos = {
  //     x: pos.x,
  //     y: pos.y,
  //     z: pos.z,
  //   };
  //   window.unitygameinstance.Module._DoLocalMove(id, JSON.stringify(endpos), duration);
  // },

  _DoLocalMove(id, pos, duration) {
    var endpos = { x: pos.x, y: pos.y, z: pos.z };
    window.unitygameinstance.Module.DynCallCSFunc(
      "DoLocalMove",
      "iiif",
      [typeof id, typeof JSON.stringify(endpos), typeof duration],
      [id, JSON.stringify(endpos), duration]
    );
  },
  //平滑旋转
  // _DoRotate(id, Rot, duration) {
  //   var endRot = {
  //     x: Rot.x,
  //     y: Rot.y,
  //     z: Rot.z,
  //   };
  //   window.unitygameinstance.Module._DoRotate(id, JSON.stringify(endRot), duration);
  // },

  _DoRotate(id, Rot, duration) {
    var endRot = { x: Rot.x, y: Rot.y, z: Rot.z };
    window.unitygameinstance.Module.DynCallCSFunc(
      "DoRotate",
      "iiif",
      [typeof id, typeof JSON.stringify(endRot), typeof duration],
      [id, JSON.stringify(endRot), duration]
    );
  },
  //平滑旋转
  // _DoLocalRotate(id, Rot, duration) {
  //   var endRot = {
  //     x: Rot.x,
  //     y: Rot.y,
  //     z: Rot.z,
  //   };
  //   window.unitygameinstance.Module._DoLocalRotate(
  //     id,
  //     JSON.stringify(endRot),
  //     duration
  //   );
  // },

  _DoLocalRotate(id, Rot, duration) {
    var endRot = { x: Rot.x, y: Rot.y, z: Rot.z };
    window.unitygameinstance.Module.DynCallCSFunc(
      "DoLocalRotate",
      "iiif",
      [typeof id, typeof JSON.stringify(endRot), typeof duration],
      [id, JSON.stringify(endRot), duration]
    );
  },

  //平滑缩放
  // _DoLocalScale(id, value, duration) {
  //   let endValue = {
  //     x: value.x,
  //     y: value.y,
  //     z: value.z,
  //   };
  //   window.unitygameinstance.Module._DoLocalScale(
  //     id,
  //     JSON.stringify(endValue),
  //     duration
  //   );
  // },

  _DoLocalScale(id, value, duration) {
    var endRot = { x: value.x, y: value.y, z: value.z };
    window.unitygameinstance.Module.DynCallCSFunc(
      "DoLocalScale",
      "iiif",
      [typeof id, typeof JSON.stringify(endRot), typeof duration],
      [id, JSON.stringify(endRot), duration]
    );
  },

  // //获取主相机Id
  // _GetMainCameraId() {
  //   let id = window.unitygameinstance.Module._GetMainCameraId();
  //   return id;
  // },
  _GetMainCameraId() {
    let id = window.unitygameinstance.Module.DynCallCSFunc(
      "GetMainCameraId",
      "i",
      [],
      []
    );
    return JSON.parse(JSON.stringify(id));
  },

  //根据相机Id，获取渲染的layer
  // _GetCullingMask(id) {
  //   let layer = window.unitygameinstance.Module._GetCullingMask(id);
  //   let layers = JSON.parse(JSON.stringify(layer));
  //   return layers;
  // },

  _GetCullingMask(id) {
    let layer = window.unitygameinstance.Module.DynCallCSFunc(
      "GetCullingMask",
      "ii",
      [typeof id],
      [id]
    );
    return JSON.parse(JSON.stringify(layer));
  },

  //设置某id相机渲染的layers
  // _SetCullingMask(id, layers) {
  //   window.unitygameinstance.Module._SetCullingMask(id, JSON.stringify(layers));
  // },

  _SetCullingMask(id, layers) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "SetCullingMask",
      "iii",
      [typeof id, typeof JSON.stringify(layers)],
      [id, JSON.stringify(layers)]
    );
  },
  //给某id相机添加一个渲染的layer
  // _AddCullingMask(id, layer) {
  //   window.unitygameinstance.Module._AddCullingMask(id, layer);
  // },

  _AddCullingMask(id, layer) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "AddCullingMask",
      "iii",
      [typeof id, typeof layer],
      [id, layer]
    );
  },

  //给某id相机移除一个渲染的layer
  // _RemoveCullingMask(id, layer) {
  //   window.unitygameinstance.Module._RemoveCullingMask(id, layer);
  // },

  _RemoveCullingMask(id, layer) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "RemoveCullingMask",
      "iii",
      [typeof id, typeof layer],
      [id, layer]
    );
  },
  //看向某个object
  // _FocusObject(id, cameraId) {
  //   window.unitygameinstance.Module._FocusObject(id, cameraId);
  // },

  _FocusObject(id, cameraId) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "FocusObject",
      "iii",
      [typeof id, typeof cameraId],
      [id, cameraId]
    );
  },
  //看向某个object
  // _FocusObjectOffset(id, cameraId, pos, Rot) {
  //   Rot ? Rot : null;
  //   let offsetPos = {
  //     x: pos.x,
  //     y: pos.y,
  //     z: pos.z,
  //   };
  //   let offsetRot = null;
  //   if (Rot != null) {
  //     offsetRot = {
  //       x: Rot.x,
  //       y: Rot.y,
  //       z: Rot.z,
  //     };
  //   }
  //   window.unitygameinstance.Module._FocusObjectOffset(
  //     id,
  //     cameraId,
  //     offsetPos,
  //     offsetRot
  //   );
  // },

  _FocusObjectOffset(id, cameraId, pos, Rot) {
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
    window.unitygameinstance.Module.DynCallCSFunc(
      "FocusObjectOffset",
      "iiiii",
      [typeof id, typeof cameraId, typeof offsetPos, typeof offsetRot],
      [id, cameraId, offsetPos, offsetRot]
    );
  },

  // 新增04/08
  // 添加文本框
  _AddInputTextUI(manual, jsonStr, callback) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "AddInputTextUI",
        "viii",
        [typeof manual, typeof jsonStr, typeof callback],
        [manual, jsonStr, callback]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 画线
  _AddLineUI(manual, jsonStr, callback) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "AddLineUI",
        "viii",
        [typeof manual, typeof jsonStr, typeof callback],
        [manual, jsonStr, callback]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 画框
  _AddBoxUI(manual, jsonStr, callback) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "AddBoxUI",
        "viii",
        [typeof manual, typeof jsonStr, typeof callback],
        [manual, jsonStr, callback]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 画圆环
  _AddAnnulusUI(manual, jsonStr, callback) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "AddAnnulusUI",
        "viii",
        [typeof manual, typeof jsonStr, typeof callback],
        [manual, jsonStr, callback]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 画箭头
  _AddArrowUI(manual, jsonStr, callback) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "AddArrowUI",
        "viii",
        [typeof manual, typeof jsonStr, typeof callback],
        [manual, jsonStr, callback]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 进入创建UI状态
  _EnableCreate3DUI(value) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableCreate3DUI",
        "vi",
        [typeof value],
        [value]
      );
    } catch (error) {
      console.log(error);
    }
  },

  // 开关键盘事件

  _EnableKeyboard(value) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableKeyboard",
        "vi",
        [typeof value],
        [value]
      );
    } catch (error) {
      console.log(error);
    }
  },

  // 多段线
  _EnableMultiLineTool(value, color, callback) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableMultiLineTool",
        "viii",
        [typeof value, typeof color, typeof callback],
        [value, color, callback]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 角度
  _EnableAngleTool(value, callback) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableAngleTool",
        "vii",
        [typeof value, typeof callback],
        [value, callback]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 体积
  _EnableVolumeTool(value, callback) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableVolumeTool",
        "vii",
        [typeof value, typeof callback],
        [value, callback]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 最短距离
  _EnableMinDistanceTool(value, callback) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableMinDistanceTool",
        "vii",
        [typeof value, typeof callback],
        [value, callback]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 面积
  _EnableAreaTool(value, color, callback) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableAreaTool",
        "viii",
        [typeof value, typeof color, typeof callback],
        [value, color, callback]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 长度
  _EnableLengthTool(value, callback) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableLengthTool",
        "vii",
        [typeof value, typeof callback],
        [value, callback]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 设置灯光
  _SetLightData(jsonStr) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetLightData",
        "vi",
        [typeof jsonStr],
        [jsonStr]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 设置天空盒
  _SetSkybox(url) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetSkybox",
        "vi",
        [typeof url],
        [url]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 设置后处理
  _SetVolumeData(jsonStr) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetVolumeData",
        "vi",
        [typeof jsonStr],
        [jsonStr]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 开启动画记录
  _EnableAnimationRecord(value, callback) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableAnimationRecord",
        "vii",
        [typeof value, typeof callback],
        [value, callback]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 开始
  _PlayAnimation(value, jsonStr) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "PlayAnimation",
        "vii",
        [typeof value, typeof jsonStr],
        [value, callback]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 设置动画帧
  _SetAnimationFrame(i) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetAnimationFrame",
        "vi",
        [typeof i],
        [i]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 删除批注（所有）
  _RemoveAllAnnotations() {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "RemoveAllAnnotations",
        "v",
        [],
        []
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 添加光源（灯光类型）
  // public float? intensity;
  // public float? range;
  // public int? shadows;
  // [CanBeNull] public Color_H5 color;
  // [CanBeNull] public Vector3_H5 euler;
  _AddLight(i, jsonStr) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "AddLight",
        "vii",
        [typeof i, typeof jsonStr],
        [i, jsonStr]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 删除光源
  _RemoveAllLights() {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "RemoveAllLights",
        "v",
        [],
        []
      );
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * 04/24新增接口*/
  //  设置环境光
  _SetEnvironmentLight(jsonStr) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetEnvironmentLight",
        "vi",
        [typeof jsonStr],
        [jsonStr]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 开启场景编辑器记录
  _EnableSceneEdit(value) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableSceneEdit",
        "vi",
        [typeof value],
        [value]
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 导入场景编辑器记录
  _ImportSceneTempData() {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "ImportSceneTempData",
        "v",
        [],
        []
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 删除批注所有（关闭）
  _CompleteAllAnnotations() {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "CompleteAllAnnotations",
        "v",
        [],
        []
      );
    } catch (error) {
      console.log(error);
    }
  },

  //删除测量数据
  _RemoveAllMeasureTools() {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "RemoveAllMeasureTools",
        "v",
        [],
        []
      );
    } catch (error) {
      console.log(error);
    }
  },
  // 隐藏测量数据
  _HideAllMeasureTools(value) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "HideAllMeasureTools",
        "vi",
        [typeof value],
        [value]
      );
    } catch (error) {
      console.log(error);
    }
  },

  _SetLODsScreenRelativeTransitionHeight(ratio) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetLODsScreenRelativeTransitionHeight",
        "vf",
        [typeof ratio],
        [ratio]
      );
    } catch (error) {
      console.log(error);
    }
  },
  /*
  *
  ldt新增接口
  */
  // 将该模型全部变透明
  _AllToTransById(id, trans) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "AllToTransById",
      "vif",
      [typeof id, typeof trans],
      [id, trans]
    );
  },
  // 将该模型全部变实心
  _AllToPbrById(id) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "AllToPbrById",
      "vi",
      [typeof id],
      [id]
    );
  },
  _ToTransById(id, num, trans) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "ToTransById",
      "vfff",
      [typeof id, typeof num, typeof trans],
      [id, num, trans]
    );
  },
  // 将模型某个材质变透明
  _ToPbrById(id, num) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "ToPbrById",
      "vif",
      [typeof id, typeof num],
      [id, num]
    );
  },
  // 将模型某个材质变实心
  _LookAtPos(pos) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "LookAtPos",
      "vi",
      [typeof pos],
      [pos]
    );
  },
  _ZoomIn() {
    window.unitygameinstance.Module.DynCallCSFunc("ZoomIn", "v", [], []);
  },
  _ZoomOut() {
    window.unitygameinstance.Module.DynCallCSFunc("ZoomOut", "v", [], []);
  },

  // 04/24新增
  _ToPerspective(camid) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "ToPerspective",
      "vi",
      [typeof camid],
      [camid]
    );
  },
  _ToOrthographic(camid) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "ToOrthographic",
      "vi",
      [typeof camid],
      [camid]
    );
  },
  _FrontView(camid) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "FrontView",
      "vi",
      [typeof camid],
      [camid]
    );
  },
  _BackView(camid) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "BackView",
      "vi",
      [typeof camid],
      [camid]
    );
  },
  _LeftView(camid) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "LeftView",
      "vi",
      [typeof camid],
      [camid]
    );
  },
  _RightView(camid) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "RightView",
      "vi",
      [typeof camid],
      [camid]
    );
  },
  _TopView(camid) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "TopView",
      "vi",
      [typeof camid],
      [camid]
    );
  },
  _BottomView(camid) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "BottomView",
      "vi",
      [typeof camid],
      [camid]
    );
  },
// 6-29新增

  //开启动态观察
  _EnableObservation(value) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableObservation",
        "vi",
        [typeof value],
        [value]
      );
    } catch (error) {
      console.log(error);
    }
  },
  //更改材质信息
  _ChangeMaterialInfo(id,info){
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "ChangeMaterialInfo",
        "vii",
        [typeof id,typeof info],
        [id,info]
      );
    } catch (error) {
      console.log(error);
    }
  },
///通过ID进行剖切
  _StartCrossById(id){
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "StartCrossById",
        "vi",
        [typeof id],
        [id]
      );
    } catch (error) {
      console.log(error);
    }
  },

  ///通过根节点进行剖切
  _StartCrossByModelRoot(){
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "StartCrossByModelRoot",
        "v",
        [],
        []
      );
    } catch (error) {
      console.log(error);
    }
  },
  ///关闭剖切
  _RestoreCross(){
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "RestoreCross",
        "v",
        [],
        []
      );
    } catch (error) {
      console.log(error);
    }
  },
    ///重新计算剖切包围盒
    _ReCalculateBounds(){
      try {
        window.unitygameinstance.Module.DynCallCSFunc(
          "ReCalculateBounds",
          "v",
          [],
          []
        );
      } catch (error) {
        console.log(error);
      }
    },



  /**
   *
   * wwj
   */

  //unity 加载GLB接口
  _LoadGlbAsync(url, onLoad, onProgress, onError, timeout) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "LoadGlbAsyncCS",
      "viiiii",
      [
        typeof url,
        typeof onLoad,
        typeof onProgress,
        typeof onError,
        typeof timeout,
      ],
      [url, onLoad, onProgress, onError, timeout]
    );
  },
  // 设置对象可见不可见
  _GameObjSetActive(isActive, instanceID, onMsg) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "GameObjectSetActiveCS",
      "viii",
      [typeof isActive, typeof instanceID, typeof onMsg],
      [isActive, instanceID, onMsg]
    );
  },

  //

  /**
   *
   *
   * 下载
   *
   * **/
  // 下载第一批
  list: null,

  _Downloade(url) {
    this.downLoadab(url);
    this.downLoadab2(url);
  },

  async downLoadab(path) {
    this._TestDB(path);
  },

  async downLoadab2(path) {
    this._TestDB(path);
  },

  //异步返回IndexedDB缓存资源url供Uniyt使用
  GetIndexedDBURL(dbName, keys) {
    var GetValue = this.GetValue;
    var tableName = dbName.toUpperCase();
    let blobUrls = []; //异步返回bloburl序列
    return new Promise((resolve, reject) => {
      var indexedDB = window.indexedDB;
      var request = indexedDB.open(dbName, 1);
      request.onerror = function (event) {
        console.log("IndexedDB error: " + event.target.errorCode);
        reject("error");
      };
      request.onsuccess = async function (event) {
        var db = request.result;
        // Open a transaction to the database
        var transaction = db.transaction([tableName], "readwrite");
        // Retrieve the video file
        if (Array.isArray(keys) == true) {
          keys.forEach(async (key, i) => {
            let obj = await GetValue(transaction, tableName, key);
            var URL = window.URL || window.webkitURL;
            var bloburl = URL.createObjectURL(new Blob([obj]));
            blobUrls.push({ name: key, bloburl: bloburl });
            if (i == keys.length - 1) {
              resolve(blobUrls);
            }
          });
        } else {
          let obj = await GetValue(transaction, tableName, keys);
          var URL = window.URL || window.webkitURL;
          var bloburl = URL.createObjectURL(new Blob([obj]));
          blobUrls.push({ name: keys, bloburl: bloburl });
          resolve(blobUrls);
        }
      };
    });
  },
  GetValue(transaction, tableName, key) {
    if (key == null || key == undefined || key == "") {
      resolve(null);
    } else {
      console.log(key);
      return new Promise((resolve, reject) => {
        let objectStore = transaction.objectStore(tableName); // 仓库对象
        let request = objectStore.get(key);
        request.onerror = function (event) {
          console.log("事务失败");
          reject(event);
        };
        request.onsuccess = function (event) {
          // console.log("主键查询结果: ");
          resolve(request.result);
        };
      });
    }
  },
  //下载资源文件
  DownloadResource(abUrl) {
    try {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.timeout = 60000;
        xhr.open("GET", abUrl);
        xhr.responseType = "blob";
        xhr.onload = () => {
          if (xhr.status === 200) {
            var byteArray = new Uint8Array(xhr.response);
            let reader = new FileReader();
            reader.readAsDataURL(xhr.response);
            reader.onload = function (e) {
              //console.log("xhr.response byteArray: " + reader.result);
              blob = reader.result.split(",")[1];
              //console.log(blob);
              //const base64String = 'SGVsbG8gV29ybGQ='; // 要转换的 Base64 字符串
              const base64 = atob(blob); // 将 Base64 字符串解码为二进制数据
              var bytesAB = new Uint8Array(base64.length);
              for (let i = 0; i < base64.length; i++) {
                bytesAB[i] = base64.charCodeAt(i);
              }
              //blob = null;
              //console.log(bytesAB);
              resolve(bytesAB);
            };
          } else {
            resolve(null);
            reject(xhr.statusText);
          }
        };
        xhr.ontimeout = () => {
          reject("timeout");
        };
        xhr.onerror = () => {
          console.log("eeeeeeeeeeeeeeeee");
          reject("error");
        };
        xhr.send(() => {
          console.log("send error");
        });
      });
    } catch (error) {
      console.log(error + "DownloadResource");
    }
  },
  //查询数据库表是否存在
  CheckDatabaseExists(databaseInfos) {
    return new Promise(function (resolve, reject) {
      var indexedDB = window.indexedDB;
      indexedDB.databases().then((res) => {
        databaseInfos.forEach((item) => {
          if (
            typeof res.find((ele) => ele.name === item.dbName) == "undefined"
          ) {
            item.isExist = false;
            item.keys.forEach((key) => {
              key.isDownloaded = false;
            });
            console.log(item);
          } else {
            item.isExist = true;
          }
          console.log("checkdatabase", item);
        });
        resolve(databaseInfos);
      });
    });
  },
  CheckIndexedDBValue(dbInfo) {
    //dbInfo {dbName: 'pic', isExist: true, keys: Array()}
    var dbName = dbInfo.dbName;
    var tableName = dbInfo.dbName.toUpperCase();
    return new Promise((resolve, reject) => {
      if (dbInfo.isExist == true) {
        var indexedDB = window.indexedDB;
        var request = indexedDB.open(dbName, 1);
        request.onerror = function (event) {
          console.log("IndexedDB error: " + event.target.errorCode);
          reject("error");
        };
        request.onsuccess = async function (event) {
          var db = request.result;
          //Open a transaction to the database
          var transaction = db.transaction([tableName], "readonly");
          // Retrieve the video file

          await dbInfo.keys.forEach((key) => {
            transaction.objectStore(tableName).get(key.name).onsuccess =
              function (event) {
                if (typeof event.target.result == "object") {
                  key.isDownloaded = true;
                } else {
                  key.isDownloaded = false;
                }
              };
          });
          //resolve(dbInfo.keys);
          transaction.oncomplete = function () {
            console.log("check database value", dbInfo.keys);
            resolve(dbInfo.keys);
          };
        };
      } else {
        console.log("check database value", dbInfo.keys);
        resolve(dbInfo.keys);
      }
    });
  },
  Download(keys, obj) {
    keys.forEach(async (item, i) => {
      await window.unitygameinstance.Module.DynCallCSFunc(
        "AddurlDic_H5",
        "vii",
        [typeof item.name, typeof item.bloburl],
        [item.name, item.bloburl]
      );
      if (i == keys.length - 1) {
        console.log("AddurlDic_H5 Done");
        this.getTem(obj);
      }
    });
  },

  // 封装GET请求

  /*ajax封装-get
       @param url:请求的路径
       @param data:发送的数据,格式:{key1:value1,key2:value2}
       @param callback:回调函数,方便用户处理自己的数据,传递逻辑
*/
  _getModelurl(url) {
    //创建异步对象
    return new Promise(function (resolve, reject) {
      var xhr = null;
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        //IE6及以下
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
      //设置请求行
      xhr.open("get", url);
      //设置请求头(get可以省略)
      //注册回调函数
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          //调用传递的回调函数
          callback(xhr.responseText);
          this._InitModel(xhr.responseText);
        }
      };
      //发送请求主体
      resolve(xhr.responseText);
    });
  },
  dbInfos: [],
  obj: null,
  callbacks: [],
  // 下载
  async InitSingleModel(json, callback) {
    this.dbInfos = [];
    this.obj = null;
    module1.loadcallback = callback;
    this.obj = JSON.parse(json);
    //this.callbacks.push({ id: this.obj.fileInfo.id, callback: callback });
    var initID = this.obj.fileInfo.id;
    //modelInfoDict 字典初始化
    if (this.modelInfoDict.get(initID) == undefined) {
      //字典初始化
      this.modelInfoDict.set(initID, {
        AccessCount: 1,
        LastAccessTime: new Date(),
        isInstantiating: false,
        //KB==>MB 对heap size进行估算
        heapSizeEstimate: (this.obj.fileInfo.size / 1024 / 1024) * 8,
        //{id,instanceID[]}
        uuidDict: new Map(),
      });
    }
    // 引用计数++，更新访问时间
    else {
      this.modelInfoDict.get(initID).AccessCount++;
      this.modelInfoDict.get(initID).LastAccessTime = new Date();
    }
    //其他模型设置为不可见
    this.modelInfoDict.forEach((value, key) => {
      console.log(key, value);
      if (key != initID) {
        if (value.isInstantiated == true) {
          value.uuidDict.forEach((uuid) => {
            uuid.instanceID.forEach((id) => {
              //console.log("GameObjSetActive false", id);
              this._SetPropertyById(Number(id), "visible", false.toString());
            });
          });
        }
      }
    });
    //当前模型已生成 则设置可见
    if (this.modelInfoDict.get(initID).isInstantiated == true) {
      console.log(this.modelInfoDict.get(initID).uuidDict);
      this.modelInfoDict.get(initID).uuidDict.forEach((uuid) => {
        uuid.instanceID.forEach((id) => {
          this._SetPropertyById(Number(id), "visible", true.toString());
          //this._GameObjSetActive(true, id);
        });
      });
      console.log("InitQueue", this.InitQueue);
      this.InitQueue.activeQueue.shift();
      console.log("SetActive True");
    } else {
      //判断Unity是否加载完成
      var loading = setInterval(() => {
        console.log("loading");
        if (window.unitygameinstance != undefined) {
          console.log("loaded");
          clearInterval(loading);
        }
      }, 1000);
      var availableHeapSize;
      if (window.unitygameinstance == undefined) {
        availableHeapSize = 4096;
      } else {
        availableHeapSize =
          window.performance.memory.jsHeapSizeLimit / 1024 / 1024 -
          window.unitygameinstance.GetMemoryInfo().totalWASMHeapSize /
            1024 /
            1024;
      }
      console.log("availableHeapSize", availableHeapSize);
      if (this.modelInfoDict.get(initID).heapSizeEstimate < availableHeapSize) {
        console.log("New Add File");
        this.Download();
      } else {
        console.log("New Add File By Destroy");
        var modelArr = [];
        modelInfoDict.forEach((value, key) => {
          modelArr.push({
            id: key,
            AccessCount: value.AccessCount,
            LastAccessTime: value.LastAccessTime,
            Size: value.heapSizeEstimate,
          });
        });
        modelArr = sortByAccessAndTime(modelArr);
        var sizeCount = 0;
        modelArr.forEach((item) => {
          if (sizeCount < this.obj.fileInfo.size) {
            sizeCount += item.Size;
            modelInfoDict.get(item.id).isNeedDestroy = true;
          }
        });
        //清理对象
        modelInfoDict.forEach((value) => {
          if (value.isNeedDestroy == true) {
            value.modelDict.forEach((model) => {
              if (model.isInstantiated == true) {
                model.instanceID.forEach((id) => {
                  //console.log("DestroyObject", id);
                  this._DestroyObject(id);
                });
              }
            });
          }
        });
        this.Download();
      }
    }
  },
  //排序
  sortByAccessAndTime(accessRecords) {
    return accessRecords.sort((a, b) => {
      // 首先根据AccessCount升序排序
      const countComparison = a.AccessCount - b.AccessCount;
      // 当AccessCount相同时，根据LastAccessTime降序排序
      if (countComparison === 0) {
        return a.LastAccessTime.getTime() - b.LastAccessTime.getTime();
      }
      return countComparison;
    });
  },

  async Download() {
    //下载信息
    //var dbInfos = [];
    //AB包列表
    var models = [];
    //抽取 modelID 下载url
    this.obj.models.forEach((item) => {
      models.push({ name: item.modelID, url: item.url });
    });
    this.dbInfos.push({
      dbName: "data",
      isExist: {},
      isAllDone: true,
      keys: models,
    });
    this.dbInfos.push({
      dbName: "texture",
      isExist: {},
      keys: [this.obj.texturezip],
    });
    //database check
    await this.CheckDatabaseExists(this.dbInfos);
    console.log(this.dbInfos);
    //database value check
    let promise = this.dbInfos.map(async (db) => {
      await this.CheckIndexedDBValue(db);
    });
    await Promise.all(promise);
    console.log(this.dbInfos);
    if (
      this.dbInfos[0].keys.find((item) => item.isDownloaded == false) ||
      this.dbInfos[1].keys.find((item) => item.isDownloaded == false)
    ) {
      //url quene down
      this.dbInfos.map((item) => {
        item.keys.map((key) => {
          if (key.isDownloaded == false) {
            //this.enqueue(key.url,item.dbName,key.name);

            this.enqueue({ url: key.url, dbName: item.dbName, name: key.name });
          }
        });
      });
    } else {
      this.AfterDownResource();
    }
  },
  //对外接口
  _InitModel(json, callback) {
    //需要对数据的

    //
    this.EnqueueInit({
      id: JSON.parse(json).fileInfo.id,
      name: JSON.parse(json).fileInfo.name,
      jsonStr: json,
      cb: callback,
    });
  },

  EnqueueInit(task) {
    this.InitQueue.queue.push(task);
    console.log("Push task");
    this.StartNextInit();
  },
  StartNextInit() {
    console.log("InitQueue.queue.length", this.InitQueue.queue.length);
    console.log(
      "this.InitQueue.activeQueue.length",
      this.InitQueue.activeQueue.length
    );
    while (
      this.InitQueue.queue.length > 0 &&
      this.InitQueue.activeQueue.length < this.InitQueue.maxActive
    ) {
      const currentTask = this.InitQueue.queue.shift();
      this.InitTask(currentTask);
    }
  },
  InitTask(task) {
    this.InitQueue.activeQueue.push(task);
    this.InitSingleModel(task.jsonStr, task.cb);
    //this.StartNextInit();
  },
  DownloadQueue: {
    queue: [],
    activeDownloads: [],
    maxConcurrentDownloads: 1300,
  },
  enqueue(key) {
    this.DownloadQueue.queue.push(key);
    this.StartNextDownloads(key);
  },
  async StartNextDownloads(key) {
    while (
      this.DownloadQueue.queue.length > 0 &&
      this.DownloadQueue.activeDownloads.length <
        this.DownloadQueue.maxConcurrentDownloads
    ) {
      const currentTask = this.DownloadQueue.queue.shift();
      await this.DownloadTask(currentTask);
    }
  },
  async DownloadTask(key) {
    this.DownloadQueue.activeDownloads.push(key);
    try {
      await this.DownloadResource(key.url).then(async (obj) => {
        await this.SetIndexedDB(key.dbName, key.name, obj);
      });
    } finally {
      this.DownloadQueue.activeDownloads.shift(key);
      this.StartNextDownloads();
      if (this.DownloadQueue.activeDownloads.length == 0) {
        console.log("All Done");
        this.AfterDownResource();
      }
      // 无论下载成功与否，都要尝试启动下一个任务
    }
  },
  async AfterDownResource() {
    var promise = this.dbInfos.map(async (db) => {
      await this.GetIndexedDBBlobUrls(db.dbName, db.keys);
    });
    await Promise.all(promise);
    console.log("url done", this.dbInfos);
    var dbtexture = this.dbInfos.find((ele) => ele.dbName === "texture");
    console.log(dbtexture);
    var dbobj = this.dbInfos.find((ele) => ele.dbName === "data");
    promise = dbobj.keys.map(async (key) => {
      await delete key.url;
    });
    await Promise.all(promise);
    console.log(dbobj);
    //判断unity加载是否完成
    promise = this.obj.models.map((key) => {
      delete key.url;
    });
    console.log("obj", this.obj);
    var a = setInterval(() => {
      console.log("module1.unityloadpro 0", module1.unityloadpro);
      if (module1.unityloadpro) {
        console.log("module1.unityloadpro 1", module1.unityloadpro);
        clearInterval(a);
        console.log("start call unity api ");
        this.LoadCallBack(
          dbtexture.keys[0].bloburl,
          JSON.stringify(dbobj.keys),
          JSON.stringify(this.obj)
        );
        //全局变量清空
        this.obj = null;
        this.dbInfos = null;
      }
    }, 1000);
  },

  LoadCallBack(dbtexture, dbobj, json) {
    var a = setInterval(() => {
      if (
        typeof window.unitygameinstance.Module["BlobMessage"] == "undefined"
      ) {
      } else {
        clearInterval(a);
        this.LoadBIMBegin(dbtexture, dbobj, json);
        return;
      }
    }, 100);
  },
  LoadBIMBegin(dbtexture, dbobj, json) {
    console.log("dbtexture", dbtexture);
    console.log("dbobj", dbobj);
    console.log("json", json);
    //加载textue.zip
    if (dbtexture) {
      this.LoadTextureZip(dbtexture, this.Msg);
    }

    //下载并加载
    // this.Download(dbobj.keys, obj);
    this.AddBlob2U3D(dbobj, this.BlobCallBack);
    this.AddModelMsg2U3D(json, this.ModelMsgCallBack);
  },
  AddModelMsg2U3D(msg, fnc) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "LoadMessage",
      "vii",
      [typeof msg, typeof fnc],
      [msg, fnc]
    );
  },
  // onError(obj) {
  //   if (window) {
  //     window.callbacks(obj);
  //   } else {
  //     console.log(obj);
  //   }
  // },
  ModelMsgCallBack(obj) {
    //obj id
    console.log("LoadMessage:" + obj);
    if (obj.indexOf("已成功添加模型信息") >= 0) {
      window.unitygameinstance.Module.DynCallCSFunc(
        "ChangeLoadCount",
        "ii",
        [typeof 500],
        [500]
      );
      window.unitygameinstance.Module.DynCallCSFunc(
        "BeginLoad",
        "vii",
        [typeof module1.loadcallback, typeof module1.OnLoadAdapter],
        [module1.loadcallback, module1.OnLoadAdapter]
      );
    }
  },

  OnLoadAdapter(fileID, msg) {
    // console.log("OnLoadSuccess", fileID, msg);
    var initedTask = module1.InitQueue.activeQueue.shift();
    // console.log(initedTask);
    module1.modelInfoDict.get(initedTask.id).isInstantiated = true;
    // console.log(module1.modelInfoDict.get(initedTask.id));
    var uuid, id;
    JSON.parse(initedTask.jsonStr).models.map((item) => {
      uuid = item.modelID.replace(".ab", "");
      id = module1._UUID2ID(uuid);
      if (id == undefined) {
        console.log("id.obj is undefined", uuid);
      } else {
        module1.modelInfoDict
          .get(initedTask.id)
          .uuidDict.set(uuid, { instanceID: [JSON.parse(id).id] });
        //如果主体对象生成，则查询主体对象复制体instanceID
        item.copies.map((copy) => {
          // console.log("copy", copy);
          id = module1._UUID2ID(copy.modelID);
          if (id == undefined) {
            console.log("id.obj is undefined", copy.modelID);
          } else {
            module1.modelInfoDict
              .get(initedTask.id)
              .uuidDict.get(uuid)
              .instanceID.push(JSON.parse(id).id);
          }
        });
      }
    });
    // console.log(module1.modelInfoDict);
    // console.log(module1.InitQueue);
  },
  AddBlob2U3D(msg, fnc) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "BlobMessage",
      "vii",
      [typeof msg, typeof fnc],
      [msg, fnc]
    );
  },
  BlobCallBack(obj) {
    console.log("BlobMessage:" + obj);
  },
  Msg(obj) {
    console.log("LoadTextureZip:" + obj);
  },

  getTem(obj) {
    var models = obj.models;
    for (let index = 0; index < models.length; index++) {
      this.temdic(models[index].modelID, models[index].modelID);
      let matstr = JSON.stringify(models[index].materials);
      this.matdic(models[index].modelID, matstr);
      for (let index1 = 0; index1 < models[index].copies.length; index1++) {
        this.temdic(
          models[index].copies[index1].modelID + ".ab",
          models[index].modelID
        );
        let position = JSON.stringify({
          x: models[index].copies[index1].x,
          y: models[index].copies[index1].y,
          z: models[index].copies[index1].z,
        });
        this.posdic(models[index].copies[index1].modelID + ".ab", position);
      }
    }
    console.log("添加完成");
    this.loadtestin(obj.view);
  },

  temdic(str1, str2) {
    let str111 = str1;
    let str222 = str2;
    window.unitygameinstance.Module.DynCallCSFunc(
      "UUid2TemId",
      "vii",
      [typeof str111, typeof str222],
      [str111, str222]
    );
  },
  posdic(str1, str2) {
    let str111 = str1;
    let str222 = str2;
    window.unitygameinstance.Module.DynCallCSFunc(
      "AddPosDic",
      "vii",
      [typeof str111, typeof str222],
      [str111, str222]
    );
  },
  matdic(str1, str2) {
    let str111 = str1;
    let str222 = str2;
    window.unitygameinstance.Module.DynCallCSFunc(
      "AddMatDic",
      "vii",
      [typeof str111, typeof str222],
      [str111, str222]
    );
  },
  LoadPicture(url, name) {
    let str111 = url;
    let str222 = name;
    window.unitygameinstance.Module.DynCallCSFunc(
      "LoadPicture",
      "vii",
      [typeof str111, typeof str222],
      [str111, str222]
    );
  },

  LoadTextureZip(url, onError) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "LoadTextureZipCS",
        "vii",
        [typeof url, typeof onError],
        [url, onError]
      );
    } catch (error) {
      console.log(error);
    }
  },

  loadtestin(view, LoadRateIn) {
    console.log(view, "loadtestin");
    var inandout = Object.entries(view);
    module1.data = inandout[0];
    this.downloadall(module1.data).then((res) => {
      console.log(res);
      this.loadtestout(view);
    });
  },
  loadtestout(view, LoadRateOut) {
    console.log(view, "loadtestout");
    var inandout = Object.entries(view);
    module1.data = inandout[1];
    this.downloadall(module1.data).then((res) => {
      console.log(res);
      try {
        this.beginLoad();
      } catch (error) {
        console.log(error);
      }
    });
  },
  downloadall(data, loadRate) {
    return new Promise((resolve, reject) => {
      var arr = Object.entries(data[1]);
      window.unitygameinstance.Module.DynCallCSFunc(
        "ChangeLoadCount",
        "ii",
        [typeof 500],
        [500]
      );
      window.unitygameinstance.Module.DynCallCSFunc(
        "ChangeDrawCount",
        "ii",
        [typeof 1],
        [1]
      );
      var ad = arr.length;
      for (let i = 0; i < arr.length; i++) {
        for (let index = 0; index < arr[i][1].out.length; index++) {
          let name = arr[i][1].out[index] + ".ab";
          window.unitygameinstance.Module.DynCallCSFunc(
            "GetLoadList",
            "ii",
            [typeof name],
            [name]
          );
        }
        for (let index = 0; index < arr[i][1].in.length; index++) {
          let name = arr[i][1].in[index] + ".ab";
          window.unitygameinstance.Module.DynCallCSFunc(
            "GetLoadList",
            "ii",
            [typeof name],
            [name]
          );
        }
      }
      resolve("scuss!!!");
    });
  },

  beginLoad() {
    window.unitygameinstance.Module.DynCallCSFunc(
      "BeginLoad",
      "vi",
      [typeof this.loadcallback],
      [this.loadcallback]
    );
  },
  _AllToTransById(id, trans) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "AllToTransById",
      "vif",
      [typeof id, typeof trans],
      [id, trans]
    );
  },
  _AllToPbrById(id) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "AllToPbrById",
      "vi",
      [typeof id],
      [id]
    );
  },
  _ToTransById(id, num, trans) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "ToTransById",
      "vfff",
      [typeof id, typeof num, typeof trans],
      [id, num, trans]
    );
  },
  _ToPbrById(id, num) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "ToPbrById",
      "vif",
      [typeof id, typeof num],
      [id, num]
    );
  },
  GetUrl_H5(name) {
    var url = module1.urldic[name];
    console.log(module1.urldic[name], "urlurlurl");
    console.log(module1.urldic, "GETurl_H5");
    if (typeof url == "undefined") {
      url = "Error";
    }
    return url;
  },

  GetIndexedDBBlobUrls(dbName, keys) {
    //models{name:xx,url:xx}
    var tableName = dbName.toUpperCase();
    var GetValue = this.GetValue;
    return new Promise((resolve, reject) => {
      var indexedDB = window.indexedDB;
      var request = indexedDB.open(dbName, 1);
      request.onerror = function (event) {
        console.log("IndexedDB error: " + event.target.errorCode);
        reject("error");
      };
      request.onsuccess = async function (event) {
        var db = request.result;
        // Open a transaction to the database
        var transaction = db.transaction([tableName], "readwrite");
        keys.forEach(async (key, i) => {
          let obj = await GetValue(transaction, tableName, key.name);
          var URL = window.URL || window.webkitURL;
          key.bloburl = URL.createObjectURL(new Blob([obj]));
          if (i == keys.length - 1) {
            resolve(keys);
          }
        });
      };
    });
  },
  SetIndexedDB(dbName, key, value) {
    if (key == null || key == undefined || key == "") {
      resolve("success");
    } else {
      return new Promise((resolve, reject) => {
        var DBName = dbName;
        var TableName = dbName.toUpperCase();
        var indexedDB = window.indexedDB;
        var request = indexedDB.open(DBName, 1);
        request.onerror = function (event) {
          console.log("IndexedDB error: " + event.target.errorCode);
          reject("error");
        };
        request.onsuccess = function (event) {
          const db = event.target.result;
          // console.log(event.target);
          var transaction = db.transaction(TableName, "readwrite");
          var store = transaction.objectStore(TableName);
          var req = store.put(value, key);
          req.onsuccess = function (event) {
            resolve("success");
          };
          req.onerror = function (event) {
            // console.log("IndexedDB error: " + event);
            resolve("error");
          };
        };
        request.onupgradeneeded = function (event) {
          // console.log("onupgradeneeded");
          const db = event.target.result;
          // 创建一个对象存储来存储我们客户的相关信息，我们将“ssn”作为键路径
          // 因为 ssn 可以保证是不重复的——或至少在启动项目的会议上我们是这样被告知的。
          const objectStore = db.createObjectStore(TableName, {});
          objectStore.transaction.oncomplete = (event) => {
            const customerObjectStore = db
              .transaction(TableName, "readwrite")
              .objectStore(TableName);
            customerObjectStore.add(value, key);
            bytes = null;
            // console.log("onupgradeneeded Done");
            resolve("success");
          };
        };
      });
    }
  },

  // 新增
  // 关闭鼠标事件
  _EnableMove(a) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "EnableMove",
      "vi",
      [typeof a],
      [a]
    );
  },
};

export default module1;
