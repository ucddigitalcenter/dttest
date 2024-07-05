var D, y = {
  data: null,
  loadcallback: null,
  // 打开
  // _EnableClick(Layers, callback) {
  //   window.unitygameinstance.Module._EnableClick(Layers, callback);
  // },
  // 打开
  _EnableClick(e, n) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableClick",
        "vii",
        [typeof EnableLayers, typeof n],
        [e, n]
      );
    } catch (t) {
      console.log(t);
    }
  },
  // 高光
  _HighLightById(e, n, t, o) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "HighLightById",
        "iiiii",
        [
          typeof e,
          typeof n,
          typeof t,
          typeof JSON.stringify(o)
        ],
        [e, n, t, JSON.stringify(o)]
      );
    } catch (a) {
      console.log(a);
    }
  },
  //获取物体信息 int id,string type
  // _GetPropertyById(id, type) {
  //   Layerss = window.unitygameinstance.Module._GetPropertyById(id, type);
  //   return Layerss;
  // },
  _GetPropertyById(e, n) {
    try {
      let t = window.unitygameinstance.Module.DynCallCSFunc(
        "GetPropertyById",
        "iii",
        [typeof e, typeof n],
        [e, n]
      );
      return console.log(new Array(t)), new Array({ name: t.split("[") });
    } catch (t) {
      console.log(t);
    }
  },
  //获取物体所有信息
  // _GetObjectAllPropertiesById(id) {
  //   Layerss = window.unitygameinstance.Module._GetObjectAllPropertiesById(id);
  //   return Layerss;
  // },
  _GetObjectAllPropertiesById(e) {
    try {
      let n = window.unitygameinstance.Module.DynCallCSFunc(
        "GetObjectAllPropertiesById",
        "ii",
        [typeof e],
        [e]
      );
      return JSON.parse(JSON.stringify(n));
    } catch (n) {
      console.log(n);
    }
  },
  //设置鼠标覆盖层
  // _SetHoverLayer(Layerss) {
  //   window.unitygameinstance.Module._SetHoverLayer(Layerss);
  // },
  _SetHoverLayer(e) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetHoverLayer",
        "vi",
        [typeof e],
        [e]
      );
    } catch (n) {
      console.log(n);
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
    } catch (e) {
      console.log(e);
    }
  },
  //开关滑过
  // _EnableHover(trigger, callback) {
  //   window.unitygameinstance.Module._EnableHover(trigger, callback);
  // },
  _EnableHover(e, n) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableHover",
        "vii",
        [typeof e, typeof n],
        [e, n]
      );
    } catch (t) {
      console.log(t);
    }
  },
  //设置点击层
  // _SetClickLayer(Layerss) {
  //   window.unitygameinstance.Module._SetClickLayer(Layerss);
  // },
  _SetClickLayer(e) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetClickLayer",
        "vi",
        [typeof e],
        [e]
      );
    } catch (n) {
      console.log(n);
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
    } catch (e) {
      console.log(e);
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
  _EnableDrag(e, n, t) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableDrag",
        "viii",
        [typeof e, typeof n, typeof t],
        [e, n, t]
      );
    } catch (o) {
      console.log(o);
    }
  },
  //设置拖拽层
  // _SetDragLayer(Layerss) {
  //   window.unitygameinstance.Module._SetDragLayer(Layerss);
  // },
  _SetDragLayer(e) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetDragLayer",
        "vi",
        [typeof e],
        [e]
      );
    } catch (n) {
      console.log(n);
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
    } catch (e) {
      console.log(e);
    }
  },
  //显示所有选中的模型
  // _ShowSelects() {
  //   window.unitygameinstance.Module._ShowSelects();
  // },
  _ShowSelects() {
    try {
      window.unitygameinstance.Module.DynCallCSFunc("ShowSelects", "v", [], []);
    } catch (e) {
      console.log(e);
    }
  },
  //获取所有显示的模型
  // _GetShownObjs() {
  //   window.unitygameinstance.Module._GetShownObjs();
  // },
  _GetShownObjs() {
    try {
      let e = window.unitygameinstance.Module.DynCallCSFunc(
        "GetShownObjs",
        "i",
        [],
        []
      );
      return console.log(e), JSON.parse(JSON.stringify(e));
    } catch (e) {
      console.log(e);
    }
  },
  //显示模型
  // _ShowObj(id) {。
  //   window.unitygameinstance.Module._ShowObj(id);
  // },
  _ShowObj(e) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "ShowObj",
        "vi",
        [typeof e],
        [e]
      );
    } catch (n) {
      console.log(n);
    }
  },
  // 只显示选中模型
  _ShowSelects(e) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "ShowSelects",
        "vi",
        [typeof e],
        [e]
      );
    } catch (n) {
      console.log(n);
    }
  },
  // 隐藏某个模型
  _HideObj(e) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "HideObj",
        "vi",
        [typeof e],
        [e]
      );
    } catch (n) {
      console.log(n);
    }
  },
  //隐藏所有模型
  // _HideAllObjs() {
  //   window.unitygameinstance.Module._HideAllObjs();
  // },
  _HideAllObjs() {
    try {
      window.unitygameinstance.Module.DynCallCSFunc("HideAllObjs", "v", [], []);
    } catch (e) {
      console.log(e);
    }
  },
  //隐藏模型
  // _HideObj(id) {
  //   window.unitygameinstance.Module._HideObj(id);
  // },
  _HideObj(e) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "HideObj",
        "vi",
        [typeof e],
        [e]
      );
    } catch (n) {
      console.log(n);
    }
  },
  //获取所有隐藏的模型
  // _GetHiddenObjs() {
  //   window.unitygameinstance.Module._GetHiddenObjs();
  // },
  _GetHiddenObjs() {
    try {
      let e = window.unitygameinstance.Module.DynCallCSFunc(
        "GetHiddenObjs",
        "i",
        [],
        []
      );
      return console.log(JSON.parse(JSON.stringify(e))), JSON.parse(JSON.stringify(e));
    } catch (e) {
      console.log(e);
    }
  },
  //获取模型信息
  // _GetComponentsInfo(id) {
  //   return window.unitygameinstance.Module._GetComponentsInfo(id);
  // },
  _GetComponentsInfo(e) {
    try {
      let n = window.unitygameinstance.Module.DynCallCSFunc(
        "GetComponentsInfo",
        "ii",
        [typeof e],
        [e]
      );
      return console.log(n), n;
    } catch (n) {
      console.log(n);
    }
  },
  // 射线管理（框选接口实现）
  // _EnableRectSelect(trigger, callback) {
  //   window.unitygameinstance.Module._EnableRectSelect(trigger, callback);
  // },
  _EnableRectSelect(e, n) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableRectSelect",
        "vii",
        [typeof e, typeof n],
        [e, n]
      );
    } catch (t) {
      console.log(t);
    }
  },
  // 获取所有的射线层
  // _GetLayers() {
  //   return (Layerss = window.unitygameinstance.Module._GetLayers());
  // },
  _GetLayers() {
    try {
      return window.unitygameinstance.Module.DynCallCSFunc(
        "GetLayers",
        "i",
        [],
        []
      );
    } catch (e) {
      console.log(e);
    }
  },
  // id转uuid
  _ID2UUID(e) {
    try {
      let n = window.unitygameinstance.Module.DynCallCSFunc(
        "ID2UUID",
        "ii",
        [typeof e],
        [e]
      );
      return console.log(JSON.parse(JSON.stringify(n))), JSON.parse(JSON.stringify(n));
    } catch (n) {
      console.log(n);
    }
  },
  // uuid转id
  _UUID2ID(e) {
    try {
      let n = window.unitygameinstance.Module.DynCallCSFunc(
        "UUID2ID",
        "ii",
        [typeof e],
        [e]
      );
      return console.log(JSON.parse(JSON.stringify(n))), JSON.parse(JSON.stringify(n));
    } catch (n) {
      console.log(n);
    }
  },
  // 获取玩家信息
  _GetPlayerInfo() {
    try {
      let e = window.unitygameinstance.Module.DynCallCSFunc(
        "GetPlayerInfo",
        "i",
        [],
        []
      );
      return console.log(JSON.parse(JSON.stringify(e))), JSON.parse(JSON.stringify(e));
    } catch (e) {
      console.log(e);
    }
  },
  // EnableMove(bool value) 开关移动
  _EnableMove(e) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableMove",
        "vi",
        [typeof e],
        [e]
      );
    } catch (n) {
      console.log(n);
    }
  },
  // SetPlayerPosition(float x, float y, float z) 设置玩家位置
  _SetPlayerPosition(e, n, t) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetPlayerPosition",
        "vfff",
        [typeof e, typeof n, typeof t],
        [e, n, t]
      );
    } catch (o) {
      console.log(o);
    }
  },
  // SetPlayerEuler(float x, float y, float z) 设置玩家旋转
  _SetPlayerEuler(e, n, t) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetPlayerEuler",
        "vfff",
        [typeof e, typeof n, typeof t],
        [e, n, t]
      );
    } catch (o) {
      console.log(o);
    }
  },
  // SetObjectEuler(string id, float x, float y, float z) 设置物体旋转
  _SetObjectEuler(e, n, t, o) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetObjectEuler",
        "vifff",
        [typeof e, typeof n, typeof t, typeof o],
        [e, n, t, o]
      );
    } catch (a) {
      console.log(a);
    }
  },
  // SetObjectPosition(string id, float x, float y, float z) 设置物体位置
  _SetObjectPosition(e, n, t, o) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetObjectPosition",
        "vifff",
        [typeof e, typeof n, typeof t, typeof o],
        [e, n, t, o]
      );
    } catch (a) {
      console.log(a);
    }
  },
  // 加载单个模型
  _LoadAndInstantiate(e, n, t) {
    try {
      window.unitygameinstance.Model.Destroylayer(
        "LoadAndInstantiate",
        "viii",
        [typeof e, typeof n, typeof t],
        [e, n, t]
      );
    } catch {
    }
  },
  _InstantiateObject(e, n, t, o) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "InstantiateObject",
        "viiii",
        [
          typeof e,
          typeof n,
          typeof t,
          typeof o
        ],
        [e, n, t, o]
      );
    } catch (a) {
      console.log(a);
    }
  },
  // 卸载AB包
  /******** 之前的 **************/
  // _UnLoadAssetBundle(url, Destroylayer, onerrorname) {
  //   window.unitygameinstance.Module._UnLoadAssetBundle(url, Destroylayer, onerrorname);
  // },
  /********现在的***********/
  _UnLoadAssetBundle(e, n, t) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "UnLoadAssetBundle",
      "viii",
      [typeof e, typeof n, typeof t],
      [e, n, t]
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
  _UnloadAllAssetBundles(e, n) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "UnloadAllAssetBundlesCS",
      "vii",
      [typeof e, typeof n],
      [e, n]
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
  _DestroyObject(e, n) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "DestroyObject",
      "vii",
      [typeof e, typeof n],
      [e, n]
    );
  },
  // 销毁所有模型
  // _DestroyAllObject(onerrorname) {
  //   window.unitygameinstance.Module._DestroyAllObject(onerrorname);
  // },
  _DestroyAllObject(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "DestroyAllObject",
      "vi",
      [typeof e],
      [e]
    );
  },
  // 开关漫游
  // _EnableWalk(EnableWalklayers) {
  //   window.unitygameinstance.Module._EnableWalk(EnableWalklayers);
  // },
  // EnableRoamManualDot(bool value, string , string callback)
  _EnableWalk(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "EnableWalk",
      "vi",
      [typeof e],
      [e]
    );
  },
  // 获取模型包围盒大小
  // _GetBoundsSizeByID(id) {
  //   return (GetBoundsSizeByIDdata =
  //     window.unitygameinstance.Module._GetBoundsSizeByID(id));
  // },
  _GetBoundsSizeByID(e) {
    let n = window.unitygameinstance.Module.DynCallCSFunc(
      "GetBoundsSizeByID",
      "ii",
      [typeof e],
      [e]
    );
    return console.log(JSON.parse(JSON.stringify(n))), JSON.parse(JSON.stringify(n));
  },
  // 获取模型包围盒中心
  // _GetBoundsCenterByID(id) {
  //   return (GetBoundsCenterByIDdata =
  //     window.unitygameinstance.Module._GetBoundsCenterByID(id));
  // },
  _GetBoundsCenterByID(e) {
    let n = window.unitygameinstance.Module.DynCallCSFunc(
      "GetBoundsCenterByID",
      "ii",
      [typeof e],
      [e]
    );
    return console.log(JSON.parse(JSON.stringify(n))), JSON.parse(JSON.stringify(n));
  },
  // 获取主画布宽高
  // _GetMainCanvasWH() {
  //   return (GetMainCanvasWHdata = window.unitygameinstance.Module._GetMainCanvasWH());
  // },
  _GetMainCanvasWH(e) {
    let n = window.unitygameinstance.Module.DynCallCSFunc(
      "GetMainCanvasWH",
      "ii",
      [typeof e],
      [e]
    );
    return JSON.parse(JSON.stringify(n));
  },
  // 开关UI滑动条
  // _UIAutoFit(UIAutoFitlayers) {
  //   window.unitygameinstance.Module._UIAutoFit(UIAutoFitlayers);
  // },
  _UIAutoFit(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "UIAutoFit",
      "vi",
      [typeof e],
      [e]
    );
  },
  // 加载动画
  _createElement() {
    let e = document.getElementById("UCDunity");
    e.innerHTML = `<div class="unity-con" style="width:100%;height:100%">
    <div id="unity-container" class="unity-desktop" style="width:100%;height:100%">
      <canvas id="unity-canvas" width=960 height=600 tabindex="-1"></canvas>
      <div id="unity-loading-bar">
        <div id="unity-logo"></div>
        <div id="unity-progress-bar-empty">
          <div id="unity-progress-bar-full"></div>
        </div>
      </div>
    </div>
  </div>`, e.parentNode.appendChild(e), e = e;
  },
  _addEleEvent() {
    document.querySelector("#unity-container");
    var e = document.querySelector("#unity-canvas"), n = document.querySelector("#unity-loading-bar");
    document.querySelector("#unity-progress-bar-full"), document.querySelector("#unity-fullscreen-button");
    var t = document.querySelector("#unity-warning");
    function o(u, d) {
      function c() {
        t.style.display = t.children.length ? "block" : "none";
      }
      var w = document.createElement("div");
      w.innerHTML = u, t.appendChild(w), d == "error" ? w.style = "background: red; padding: 10px;" : (d == "warning" && (w.style = "background: yellow; padding: 10px;"), setTimeout(function() {
        t.removeChild(w), c();
      }, 5e3)), c();
    }
    var a = "/incter/api/model_unity/unity/Build/UnityMain.loader.js", l = {
      dataUrl: "/incter/api/model_unity/unity/Build/UnityMain.data",
      frameworkUrl: "/incter/api/model_unity/unity/Build/UnityMain.framework.js",
      codeUrl: "/incter/api/model_unity/unity/Build/UnityMain.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "BIMEngine",
      productVersion: "0.1.0",
      showBanner: o,
      cacheControl: function(u) {
        return u.match(/\.wasm/) || u.match(/\.data/) ? "immutable" : "no-store";
      }
    };
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      var s = document.createElement("meta");
      s.name = "viewport", s.content = "width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes", document.getElementsByTagName("head")[0].appendChild(s), e.className = "unity-mobile";
    } else
      e.style.width = "100%", e.style.height = "100%";
    n.style.display = "block";
    var r = document.createElement("script");
    r.src = a, r.onload = () => {
      var u = document.querySelector("#unity-canvas");
      createUnityInstance(u, l, this.UnityLoading).then((d) => {
        window.unitygameinstance = d, n.style.display = "none";
      }).catch((d) => {
        alert(d);
      });
    }, document.body.appendChild(r);
  },
  unityloadpro: null,
  UnityLoading(e) {
    y.unityloadpro = e, console.log("", y.unityloadpro);
  },
  _init() {
    this._createElement(), this._addEleEvent();
  },
  // 销毁
  _quitUnity() {
    window.unitygameinstance.Quit(function() {
      console.log("quit done!");
    }), window.unitygameinstance = null;
    var e = document.querySelector("#unity-canvas");
    e.remove(), e = null, this._createElement(), this._addEleEvent();
  },
  InitQueue: {
    isBusy: !1,
    queue: [],
    activeQueue: [],
    maxActive: 1
  },
  modelInfoDict: /* @__PURE__ */ new Map(),
  //timer:send texture to unity
  notiTexture: null,
  notiUnityByCache: null,
  notiUnityByFlow: null,
  // 销毁
  _onUnmountedunity() {
    window.unitygameinstance.Quit(function() {
      console.log("quit done!");
    }), window.unitygameinstance = null;
    var e = document.querySelector("#unity-canvas");
    e.remove(), e = null, this.InitQueue = {
      isBusy: !1,
      queue: [],
      activeQueue: [],
      maxActive: 1
    }, this.modelInfoDict = /* @__PURE__ */ new Map(), window.clearInterval(this.notiTexture), window.clearInterval(this.notiUnityByCache), window.clearInterval(this.notiUnityByFlow);
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
  _AddTags(e, n) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "AddTags",
      "vii",
      ["string", typeof n],
      [e, n]
    );
  },
  // 删除单个标签
  _RemoveTag(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "RemoveTag",
      "vi",
      [typeof e],
      [e]
    );
  },
  // 删除所有标签
  _RemoveAllTags() {
    window.unitygameinstance.Module.DynCallCSFunc("RemoveAllTags", "v", [], []);
  },
  // 更新标签
  _UpdateTags(e, n) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "UpdateTags",
      "vii",
      [typeof e, typeof n],
      [e, n]
    );
  },
  // 设置文字对齐方式
  _SetTextAlignment(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "UIAutoFit",
      "vi",
      [typeof e],
      [e]
    );
  },
  // 设置字体 string
  _SetTextFont(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "SetTextFont",
      "vi",
      [typeof e],
      [e]
    );
  },
  // 设置字体颜色 int int int int
  _SetTextColor(e, n, t, o) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "SetTextColor",
      "viiii",
      [typeof e, typeof n, typeof t, typeof o],
      [e, n, t, o]
    );
  },
  // 设置字体大小 float
  _SetTextSize(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "SetTextSize",
      "vf",
      [typeof e],
      [e]
    );
  },
  // 设置线路宽度 float
  _SetRouteWidth(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "SetRouteWidth",
      "vf",
      [typeof e],
      [e]
    );
  },
  // 设置线路颜色 int int int int
  _SetRouteColor(e, n, t, o) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "SetRouteColor",
      "viiii",
      [typeof e, typeof n, typeof t, typeof o],
      [e, n, t, o]
    );
  },
  // 设置事件颜色 int int int int
  _SetSelectionInnerColor(e, n, t, o) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "SetSelectionInnerColor",
      "viiii",
      [typeof e, typeof n, typeof t, typeof o],
      [e, n, t, o]
    );
  },
  // 设置线路材质 string
  _SetRouteMaterial(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "SetRouteMaterial",
      "vi",
      [typeof e],
      [e]
    );
  },
  //设置线路显隐 bool
  _SetRouteVisible(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "SetRouteVisible",
      "vi",
      [typeof e],
      [e]
    );
  },
  //设置导航速度 float
  _SetRoamSpeed(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "SetRoamSpeed",
      "vf",
      [typeof e],
      [e]
    );
  },
  //暂停导航 bool
  // _PauseRoam() {
  //   window.unitygameinstance.Module._PauseRoam();
  // },
  _PauseRoam(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "PauseRoam",
      "vi",
      [typeof e],
      [e]
    );
  },
  //结束导航
  _EndRoam() {
    window.unitygameinstance.Module.DynCallCSFunc("EndRoam", "v", [], []);
  },
  //改变导航点位 int
  _ChangeRoamPoint(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "ChangeRoamPoint",
      "vi",
      [typeof e],
      [e]
    );
  },
  //导航到达点位回调 string
  _RoamArriveEvent(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "RoamArriveEvent",
      "vi",
      [typeof e],
      [e]
    );
  },
  //开始导航 string
  _StartRoam(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "StartRoam",
      "vi",
      [typeof e],
      [e]
    );
  },
  // lidongting
  //设置属性信息
  // _SetPropertyById(id, type, value) {
  //   window.unitygameinstance.Module._SetPropertyById(id, type, value);
  // },
  _SetPropertyById(e, n, t) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "SetPropertyById",
      "iiii",
      [typeof e, typeof n, typeof t],
      [e, n, t]
    );
  },
  //根据名字获取id
  // _GetObjectByName(name) {
  //   var id = window.unitygameinstance.Module._GetObjectByName(name);
  //   var ids = JSON.parse(JSON.stringify(id));
  //   return ids;
  // },
  _GetObjectByName(e) {
    return window.unitygameinstance.Module.DynCallCSFunc(
      "GetObjectByName",
      "ii",
      [typeof e],
      [e]
    );
  },
  //根据layer获取id
  // _GetObjectByLayer(layer) {
  //   var id = window.unitygameinstance.Module._GetObjectByLayer(layer);
  //   console.log(id);
  //   var ids = JSON.parse(JSON.stringify(id));
  //   return ids;
  // },
  _GetObjectByLayer(e) {
    return window.unitygameinstance.Module.DynCallCSFunc(
      "GetObjectByLayer",
      "ii",
      [typeof e],
      [e]
    );
  },
  //根据type获取id
  // _GetObjectByType(type) {
  //   var id = window.unitygameinstance.Module._GetObjectByType(type);
  //   console.log(id);
  //   var ids = newArray(msg).stringify(id));
  //   return ids;
  // },
  _GetObjectByType(e) {
    let n = window.unitygameinstance.Module.DynCallCSFunc(
      "GetObjectByType",
      "ii",
      [typeof e],
      [e]
    );
    return new Array(JSON.parse(JSON.stringify(n)));
  },
  //根据id获取子物体的id
  // _GetObjectChilds(id) {
  //   var id = window.unitygameinstance.Module._GetObjectChilds(id);
  //   console.log(id);
  //   var ids = JSON.parse(JSON.stringify(id));
  //   return ids;
  // },
  _GetObjectChilds(e) {
    let n = window.unitygameinstance.Module.DynCallCSFunc(
      "GetObjectChilds",
      "ii",
      [typeof e],
      [e]
    );
    return console.log(JSON.parse(JSON.stringify(n))), JSON.parse(JSON.stringify(n));
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
  _AddObject(e, n, t, o, a) {
    if (e && n && t && o && a)
      alert("参数确少");
    else {
      var l = {
        x: t.x,
        y: t.y,
        z: t.z
      }, s = {
        x: o.x,
        y: o.y,
        z: o.z
      }, r = {
        x: a.x,
        y: a.y,
        z: a.z
      }, u = {
        type: e,
        Id: n,
        position: l,
        eulerAngle: s,
        localScale: r
      };
      window.unitygameinstance.Module.DynCallCSFunc(
        "AddObject",
        "vi",
        [typeof u],
        [JSON.stringify(u)]
      );
    }
  },
  //克隆对象
  // _CloneObject(id, parentId, includeChilds) {
  //   window.unitygameinstance.Module._CloneObject(id, parentId, includeChilds);
  // },
  _CloneObject(e, n, t) {
    let o = window.unitygameinstance.Module.DynCallCSFunc(
      "CloneObject",
      "iiii",
      [typeof e, typeof n, typeof t],
      [e, n, t]
    );
    return Number(o);
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
  _DoMove(e, n, t) {
    var o = { x: n.x, y: n.y, z: n.z };
    window.unitygameinstance.Module.DynCallCSFunc(
      "DoMove",
      "iiif",
      [typeof e, typeof JSON.stringify(o), typeof t],
      [e, JSON.stringify(o), t]
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
  _DoLocalMove(e, n, t) {
    var o = { x: n.x, y: n.y, z: n.z };
    window.unitygameinstance.Module.DynCallCSFunc(
      "DoLocalMove",
      "iiif",
      [typeof e, typeof JSON.stringify(o), typeof t],
      [e, JSON.stringify(o), t]
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
  _DoRotate(e, n, t) {
    var o = { x: n.x, y: n.y, z: n.z };
    window.unitygameinstance.Module.DynCallCSFunc(
      "DoRotate",
      "iiif",
      [typeof e, typeof JSON.stringify(o), typeof t],
      [e, JSON.stringify(o), t]
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
  _DoLocalRotate(e, n, t) {
    var o = { x: n.x, y: n.y, z: n.z };
    window.unitygameinstance.Module.DynCallCSFunc(
      "DoLocalRotate",
      "iiif",
      [typeof e, typeof JSON.stringify(o), typeof t],
      [e, JSON.stringify(o), t]
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
  _DoLocalScale(e, n, t) {
    var o = { x: n.x, y: n.y, z: n.z };
    window.unitygameinstance.Module.DynCallCSFunc(
      "DoLocalScale",
      "iiif",
      [typeof e, typeof JSON.stringify(o), typeof t],
      [e, JSON.stringify(o), t]
    );
  },
  // //获取主相机Id
  // _GetMainCameraId() {
  //   let id = window.unitygameinstance.Module._GetMainCameraId();
  //   return id;
  // },
  _GetMainCameraId() {
    let e = window.unitygameinstance.Module.DynCallCSFunc(
      "GetMainCameraId",
      "i",
      [],
      []
    );
    return JSON.parse(JSON.stringify(e));
  },
  //根据相机Id，获取渲染的layer
  // _GetCullingMask(id) {
  //   let layer = window.unitygameinstance.Module._GetCullingMask(id);
  //   let layers = JSON.parse(JSON.stringify(layer));
  //   return layers;
  // },
  _GetCullingMask(e) {
    let n = window.unitygameinstance.Module.DynCallCSFunc(
      "GetCullingMask",
      "ii",
      [typeof e],
      [e]
    );
    return JSON.parse(JSON.stringify(n));
  },
  //设置某id相机渲染的layers
  // _SetCullingMask(id, layers) {
  //   window.unitygameinstance.Module._SetCullingMask(id, JSON.stringify(layers));
  // },
  _SetCullingMask(e, n) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "SetCullingMask",
      "iii",
      [typeof e, typeof JSON.stringify(n)],
      [e, JSON.stringify(n)]
    );
  },
  //给某id相机添加一个渲染的layer
  // _AddCullingMask(id, layer) {
  //   window.unitygameinstance.Module._AddCullingMask(id, layer);
  // },
  _AddCullingMask(e, n) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "AddCullingMask",
      "iii",
      [typeof e, typeof n],
      [e, n]
    );
  },
  //给某id相机移除一个渲染的layer
  // _RemoveCullingMask(id, layer) {
  //   window.unitygameinstance.Module._RemoveCullingMask(id, layer);
  // },
  _RemoveCullingMask(e, n) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "RemoveCullingMask",
      "iii",
      [typeof e, typeof n],
      [e, n]
    );
  },
  //看向某个object
  // _FocusObject(id, cameraId) {
  //   window.unitygameinstance.Module._FocusObject(id, cameraId);
  // },
  _FocusObject(e, n) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "FocusObject",
      "iii",
      [typeof e, typeof n],
      [e, n]
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
  _FocusObjectOffset(e, n, t, o) {
    let a = {
      x: t.x,
      y: t.y,
      z: t.z
    }, l = null;
    o != null && (l = {
      x: o.x,
      y: o.y,
      z: o.z
    }), window.unitygameinstance.Module.DynCallCSFunc(
      "FocusObjectOffset",
      "iiiii",
      [typeof e, typeof n, typeof a, typeof l],
      [e, n, a, l]
    );
  },
  // 新增04/08
  // 添加文本框
  _AddInputTextUI(e, n, t) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "AddInputTextUI",
        "viii",
        [typeof e, typeof n, typeof t],
        [e, n, t]
      );
    } catch (o) {
      console.log(o);
    }
  },
  // 画线
  _AddLineUI(e, n, t) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "AddLineUI",
        "viii",
        [typeof e, typeof n, typeof t],
        [e, n, t]
      );
    } catch (o) {
      console.log(o);
    }
  },
  // 画框
  _AddBoxUI(e, n, t) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "AddBoxUI",
        "viii",
        [typeof e, typeof n, typeof t],
        [e, n, t]
      );
    } catch (o) {
      console.log(o);
    }
  },
  // 画圆环
  _AddAnnulusUI(e, n, t) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "AddAnnulusUI",
        "viii",
        [typeof e, typeof n, typeof t],
        [e, n, t]
      );
    } catch (o) {
      console.log(o);
    }
  },
  // 画箭头
  _AddArrowUI(e, n, t) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "AddArrowUI",
        "viii",
        [typeof e, typeof n, typeof t],
        [e, n, t]
      );
    } catch (o) {
      console.log(o);
    }
  },
  // 进入创建UI状态
  _EnableCreate3DUI(e) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableCreate3DUI",
        "vi",
        [typeof e],
        [e]
      );
    } catch (n) {
      console.log(n);
    }
  },
  // 开关键盘事件
  _EnableKeyboard(e) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableKeyboard",
        "vi",
        [typeof e],
        [e]
      );
    } catch (n) {
      console.log(n);
    }
  },
  // 多段线
  _EnableMultiLineTool(e, n, t) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableMultiLineTool",
        "viii",
        [typeof e, typeof n, typeof t],
        [e, n, t]
      );
    } catch (o) {
      console.log(o);
    }
  },
  // 角度
  _EnableAngleTool(e, n) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableAngleTool",
        "vii",
        [typeof e, typeof n],
        [e, n]
      );
    } catch (t) {
      console.log(t);
    }
  },
  // 体积
  _EnableVolumeTool(e, n) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableVolumeTool",
        "vii",
        [typeof e, typeof n],
        [e, n]
      );
    } catch (t) {
      console.log(t);
    }
  },
  // 最短距离
  _EnableMinDistanceTool(e, n) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableMinDistanceTool",
        "vii",
        [typeof e, typeof n],
        [e, n]
      );
    } catch (t) {
      console.log(t);
    }
  },
  // 面积
  _EnableAreaTool(e, n, t) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableAreaTool",
        "viii",
        [typeof e, typeof n, typeof t],
        [e, n, t]
      );
    } catch (o) {
      console.log(o);
    }
  },
  // 长度
  _EnableLengthTool(e, n) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableLengthTool",
        "vii",
        [typeof e, typeof n],
        [e, n]
      );
    } catch (t) {
      console.log(t);
    }
  },
  // 设置灯光
  _SetLightData(e) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetLightData",
        "vi",
        [typeof e],
        [e]
      );
    } catch (n) {
      console.log(n);
    }
  },
  // 设置天空盒
  _SetSkybox(e) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetSkybox",
        "vi",
        [typeof e],
        [e]
      );
    } catch (n) {
      console.log(n);
    }
  },
  // 设置后处理
  _SetVolumeData(e) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetVolumeData",
        "vi",
        [typeof e],
        [e]
      );
    } catch (n) {
      console.log(n);
    }
  },
  // 开启动画记录
  _EnableAnimationRecord(e, n) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableAnimationRecord",
        "vii",
        [typeof e, typeof n],
        [e, n]
      );
    } catch (t) {
      console.log(t);
    }
  },
  // 开始
  _PlayAnimation(e, n) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "PlayAnimation",
        "vii",
        [typeof e, typeof n],
        [e, callback]
      );
    } catch (t) {
      console.log(t);
    }
  },
  // 设置动画帧
  _SetAnimationFrame(e) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetAnimationFrame",
        "vi",
        [typeof e],
        [e]
      );
    } catch (n) {
      console.log(n);
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
    } catch (e) {
      console.log(e);
    }
  },
  // 添加光源（灯光类型）
  // public float? intensity;
  // public float? range;
  // public int? shadows;
  // [CanBeNull] public Color_H5 color;
  // [CanBeNull] public Vector3_H5 euler;
  _AddLight(e, n) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "AddLight",
        "vii",
        [typeof e, typeof n],
        [e, n]
      );
    } catch (t) {
      console.log(t);
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
    } catch (e) {
      console.log(e);
    }
  },
  /**
   * 04/24新增接口*/
  //  设置环境光
  _SetEnvironmentLight(e) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetEnvironmentLight",
        "vi",
        [typeof e],
        [e]
      );
    } catch (n) {
      console.log(n);
    }
  },
  // 开启场景编辑器记录
  _EnableSceneEdit(e) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableSceneEdit",
        "vi",
        [typeof e],
        [e]
      );
    } catch (n) {
      console.log(n);
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
    } catch (e) {
      console.log(e);
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
    } catch (e) {
      console.log(e);
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
    } catch (e) {
      console.log(e);
    }
  },
  // 隐藏测量数据
  _HideAllMeasureTools(e) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "HideAllMeasureTools",
        "vi",
        [typeof e],
        [e]
      );
    } catch (n) {
      console.log(n);
    }
  },
  _SetLODsScreenRelativeTransitionHeight(e) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "SetLODsScreenRelativeTransitionHeight",
        "vf",
        [typeof e],
        [e]
      );
    } catch (n) {
      console.log(n);
    }
  },
  /*
  *
  ldt新增接口
  */
  // 将该模型全部变透明
  _AllToTransById(e, n) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "AllToTransById",
      "vif",
      [typeof e, typeof n],
      [e, n]
    );
  },
  // 将该模型全部变实心
  _AllToPbrById(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "AllToPbrById",
      "vi",
      [typeof e],
      [e]
    );
  },
  _ToTransById(e, n, t) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "ToTransById",
      "vfff",
      [typeof e, typeof n, typeof t],
      [e, n, t]
    );
  },
  // 将模型某个材质变透明
  _ToPbrById(e, n) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "ToPbrById",
      "vif",
      [typeof e, typeof n],
      [e, n]
    );
  },
  // 将模型某个材质变实心
  _LookAtPos(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "LookAtPos",
      "vi",
      [typeof e],
      [e]
    );
  },
  _ZoomIn() {
    window.unitygameinstance.Module.DynCallCSFunc("ZoomIn", "v", [], []);
  },
  _ZoomOut() {
    window.unitygameinstance.Module.DynCallCSFunc("ZoomOut", "v", [], []);
  },
  // 04/24新增
  _ToPerspective(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "ToPerspective",
      "vi",
      [typeof e],
      [e]
    );
  },
  _ToOrthographic(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "ToOrthographic",
      "vi",
      [typeof e],
      [e]
    );
  },
  _FrontView(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "FrontView",
      "vi",
      [typeof e],
      [e]
    );
  },
  _BackView(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "BackView",
      "vi",
      [typeof e],
      [e]
    );
  },
  _LeftView(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "LeftView",
      "vi",
      [typeof e],
      [e]
    );
  },
  _RightView(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "RightView",
      "vi",
      [typeof e],
      [e]
    );
  },
  _TopView(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "TopView",
      "vi",
      [typeof e],
      [e]
    );
  },
  _BottomView(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "BottomView",
      "vi",
      [typeof e],
      [e]
    );
  },
  // 6-29新增
  //开启动态观察
  _EnableObservation(e) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "EnableObservation",
        "vi",
        [typeof e],
        [e]
      );
    } catch (n) {
      console.log(n);
    }
  },
  //更改材质信息
  _ChangeMaterialInfo(e, n) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "ChangeMaterialInfo",
        "vii",
        [typeof e, typeof n],
        [e, n]
      );
    } catch (t) {
      console.log(t);
    }
  },
  ///通过ID进行剖切
  _StartCrossById(e) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "StartCrossById",
        "vi",
        [typeof e],
        [e]
      );
    } catch (n) {
      console.log(n);
    }
  },
  ///通过根节点进行剖切
  _StartCrossByModelRoot() {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "StartCrossByModelRoot",
        "v",
        [],
        []
      );
    } catch (e) {
      console.log(e);
    }
  },
  ///关闭剖切
  _RestoreCross() {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "RestoreCross",
        "v",
        [],
        []
      );
    } catch (e) {
      console.log(e);
    }
  },
  ///重新计算剖切包围盒
  _ReCalculateBounds() {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "ReCalculateBounds",
        "v",
        [],
        []
      );
    } catch (e) {
      console.log(e);
    }
  },
  /**
   *
   * wwj
   */
  //unity 加载GLB接口
  _LoadGlbAsync(e, n, t, o, a) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "LoadGlbAsyncCS",
      "viiiii",
      [
        typeof e,
        typeof n,
        typeof t,
        typeof o,
        typeof a
      ],
      [e, n, t, o, a]
    );
  },
  // 设置对象可见不可见
  _GameObjSetActive(e, n, t) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "GameObjectSetActiveCS",
      "viii",
      [typeof e, typeof n, typeof t],
      [e, n, t]
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
  _Downloade(e) {
    this.downLoadab(e), this.downLoadab2(e);
  },
  async downLoadab(e) {
    this._TestDB(e);
  },
  async downLoadab2(e) {
    this._TestDB(e);
  },
  //异步返回IndexedDB缓存资源url供Uniyt使用
  GetIndexedDBURL(e, n) {
    var t = this.GetValue, o = e.toUpperCase();
    let a = [];
    return new Promise((l, s) => {
      var r = window.indexedDB, u = r.open(e, 1);
      u.onerror = function(d) {
        console.log("IndexedDB error: " + d.target.errorCode), s("error");
      }, u.onsuccess = async function(d) {
        var c = u.result, w = c.transaction([o], "readwrite");
        if (Array.isArray(n) == !0)
          n.forEach(async (g, m) => {
            let h = await t(w, o, g);
            var S = window.URL || window.webkitURL, p = S.createObjectURL(new Blob([h]));
            a.push({ name: g, bloburl: p }), m == n.length - 1 && l(a);
          });
        else {
          let g = await t(w, o, n);
          var f = window.URL || window.webkitURL, C = f.createObjectURL(new Blob([g]));
          a.push({ name: n, bloburl: C }), l(a);
        }
      };
    });
  },
  GetValue(e, n, t) {
    if (t == null || t == null || t == "")
      resolve(null);
    else
      return console.log(t), new Promise((o, a) => {
        let s = e.objectStore(n).get(t);
        s.onerror = function(r) {
          console.log("事务失败"), a(r);
        }, s.onsuccess = function(r) {
          o(s.result);
        };
      });
  },
  //下载资源文件
  DownloadResource(e) {
    try {
      return new Promise((n, t) => {
        const o = new XMLHttpRequest();
        o.timeout = 6e4, o.open("GET", e), o.responseType = "blob", o.onload = () => {
          if (o.status === 200) {
            var a = new Uint8Array(o.response);
            let l = new FileReader();
            l.readAsDataURL(o.response), l.onload = function(s) {
              D = l.result.split(",")[1];
              const r = atob(D);
              var u = new Uint8Array(r.length);
              for (let d = 0; d < r.length; d++)
                u[d] = r.charCodeAt(d);
              n(u);
            };
          } else
            n(null), t(o.statusText);
        }, o.ontimeout = () => {
          t("timeout");
        }, o.onerror = () => {
          console.log("eeeeeeeeeeeeeeeee"), t("error");
        }, o.send(() => {
          console.log("send error");
        });
      });
    } catch (n) {
      console.log(n + "DownloadResource");
    }
  },
  //查询数据库表是否存在
  CheckDatabaseExists(e) {
    return new Promise(function(n, t) {
      var o = window.indexedDB;
      o.databases().then((a) => {
        e.forEach((l) => {
          typeof a.find((s) => s.name === l.dbName) > "u" ? (l.isExist = !1, l.keys.forEach((s) => {
            s.isDownloaded = !1;
          }), console.log(l)) : l.isExist = !0, console.log("checkdatabase", l);
        }), n(e);
      });
    });
  },
  CheckIndexedDBValue(e) {
    var n = e.dbName, t = e.dbName.toUpperCase();
    return new Promise((o, a) => {
      if (e.isExist == !0) {
        var l = window.indexedDB, s = l.open(n, 1);
        s.onerror = function(r) {
          console.log("IndexedDB error: " + r.target.errorCode), a("error");
        }, s.onsuccess = async function(r) {
          var u = s.result, d = u.transaction([t], "readonly");
          await e.keys.forEach((c) => {
            d.objectStore(t).get(c.name).onsuccess = function(w) {
              typeof w.target.result == "object" ? c.isDownloaded = !0 : c.isDownloaded = !1;
            };
          }), d.oncomplete = function() {
            console.log("check database value", e.keys), o(e.keys);
          };
        };
      } else
        console.log("check database value", e.keys), o(e.keys);
    });
  },
  Download(e, n) {
    e.forEach(async (t, o) => {
      await window.unitygameinstance.Module.DynCallCSFunc(
        "AddurlDic_H5",
        "vii",
        [typeof t.name, typeof t.bloburl],
        [t.name, t.bloburl]
      ), o == e.length - 1 && (console.log("AddurlDic_H5 Done"), this.getTem(n));
    });
  },
  // 封装GET请求
  /*ajax封装-get
         @param url:请求的路径
         @param data:发送的数据,格式:{key1:value1,key2:value2}
         @param callback:回调函数,方便用户处理自己的数据,传递逻辑
  */
  _getModelurl(e) {
    return new Promise(function(n, t) {
      var o = null;
      window.XMLHttpRequest ? o = new XMLHttpRequest() : window.ActiveXObject && (o = new ActiveXObject("Microsoft.XMLHTTP")), o.open("get", e), o.onreadystatechange = function() {
        o.readyState == 4 && o.status == 200 && (callback(o.responseText), this._InitModel(o.responseText));
      }, n(o.responseText);
    });
  },
  dbInfos: [],
  obj: null,
  callbacks: [],
  // 下载
  async InitSingleModel(e, n) {
    this.dbInfos = [], this.obj = null, y.loadcallback = n, this.obj = JSON.parse(e);
    var t = this.obj.fileInfo.id;
    if (this.modelInfoDict.get(t) == null ? this.modelInfoDict.set(t, {
      AccessCount: 1,
      LastAccessTime: /* @__PURE__ */ new Date(),
      isInstantiating: !1,
      //KB==>MB 对heap size进行估算
      heapSizeEstimate: this.obj.fileInfo.size / 1024 / 1024 * 8,
      //{id,instanceID[]}
      uuidDict: /* @__PURE__ */ new Map()
    }) : (this.modelInfoDict.get(t).AccessCount++, this.modelInfoDict.get(t).LastAccessTime = /* @__PURE__ */ new Date()), this.modelInfoDict.forEach((r, u) => {
      console.log(u, r), u != t && r.isInstantiated == !0 && r.uuidDict.forEach((d) => {
        d.instanceID.forEach((c) => {
          this._SetPropertyById(Number(c), "visible", "false");
        });
      });
    }), this.modelInfoDict.get(t).isInstantiated == !0)
      console.log(this.modelInfoDict.get(t).uuidDict), this.modelInfoDict.get(t).uuidDict.forEach((r) => {
        r.instanceID.forEach((u) => {
          this._SetPropertyById(Number(u), "visible", "true");
        });
      }), console.log("InitQueue", this.InitQueue), this.InitQueue.activeQueue.shift(), console.log("SetActive True");
    else {
      var o = setInterval(() => {
        console.log("loading"), window.unitygameinstance != null && (console.log("loaded"), clearInterval(o));
      }, 1e3), a;
      if (window.unitygameinstance == null ? a = 4096 : a = window.performance.memory.jsHeapSizeLimit / 1024 / 1024 - window.unitygameinstance.GetMemoryInfo().totalWASMHeapSize / 1024 / 1024, console.log("availableHeapSize", a), this.modelInfoDict.get(t).heapSizeEstimate < a)
        console.log("New Add File"), this.Download();
      else {
        console.log("New Add File By Destroy");
        var l = [];
        modelInfoDict.forEach((r, u) => {
          l.push({
            id: u,
            AccessCount: r.AccessCount,
            LastAccessTime: r.LastAccessTime,
            Size: r.heapSizeEstimate
          });
        }), l = sortByAccessAndTime(l);
        var s = 0;
        l.forEach((r) => {
          s < this.obj.fileInfo.size && (s += r.Size, modelInfoDict.get(r.id).isNeedDestroy = !0);
        }), modelInfoDict.forEach((r) => {
          r.isNeedDestroy == !0 && r.modelDict.forEach((u) => {
            u.isInstantiated == !0 && u.instanceID.forEach((d) => {
              this._DestroyObject(d);
            });
          });
        }), this.Download();
      }
    }
  },
  CheckDataBase(e, n) {
    return new Promise(function(t, o) {
      var a = window.indexedDB, a = window.indexedDB;
      a.databases().then((l) => {
        l.find((s) => s.name == e) != null ? t(!0) : t(!1);
      });
    });
  },
  CheckDataBaseValueList(e, n, t) {
    return new Promise((o, a) => {
      var l = window.indexedDB, s = l.open(n, 1);
      s.onerror = function(r) {
        a("error");
      }, s.onsuccess = async function(r) {
        var u = s.result, d = u.transaction([t], "readonly");
        await e.forEach((c) => {
          d.objectStore(t).get(c.modelID).onsuccess = function(w) {
            if (typeof w.target.result == "object") {
              c.isDownloaded = !0;
              var f = window.URL || window.webkitURL, C = f.createObjectURL(
                new Blob([w.target.result])
              );
              c.blobUrl = C, c.url = void 0;
            } else
              c.isDownloaded = !1;
          };
        }), d.oncomplete = function() {
          o("success");
        };
      }, s.onupgradeneeded = function(r) {
        r.target.result.createObjectStore(TableName, {}), console.log("onupgradeneeded");
      };
    });
  },
  CheckDataBaseValueTexture(e) {
    var n = "texture", t = "TEXTURE";
    return new Promise((o, a) => {
      var l = window.indexedDB, s = l.open(n, 1);
      s.onerror = function(r) {
        a("error");
      }, s.onsuccess = async function(r) {
        var u = s.result, d = u.transaction([t], "readonly");
        d.objectStore(t).get(e.key).onsuccess = function(c) {
          if (typeof c.target.result == "object") {
            e.isDownloaded = !0;
            var w = window.URL || window.webkitURL, f = w.createObjectURL(
              new Blob([c.target.result])
            );
            e.blobUrl = f, c.target.result == null ? e.isNull = !0 : e.isNull = !1;
          } else
            e.isDownloaded = !1;
        }, d.oncomplete = function() {
          o("success");
        };
      }, s.onupgradeneeded = function(r) {
        r.target.result.createObjectStore(t, {}), console.log("onupgradeneeded");
      };
    });
  },
  //开启下载
  async startDownload(e, n) {
    y.loadcallback = n;
    const t = JSON.parse(e), o = t.models, a = t.fileInfo, l = t.texturezip, s = 1e3;
    this.notiSheets.set(a.id, {
      fileCount: o.length,
      notiCount: 0,
      notiFileCount: 0,
      downloadCount: 0,
      notiFiles: []
    });
    const r = {
      id: a.id,
      notiSheetsContext: this.notiSheets,
      view: t.view
    };
    var u = !1;
    l.key = a.id + l.name;
    var d = await this.CheckDataBase("texture", "TEXTURE");
    if (d ? (await this.CheckDataBaseValueTexture(l), l.isDownloaded == !1 && (u = !0)) : u = !0, console.log("LoadPictureCheck:", l), u) {
      const f = await this.downloadFile(l.url);
      f != null ? l.isNull = !1 : l.isNull = !0, l.blobUrl = await this.SetAndGetIndexedDB(
        "texture",
        "TEXTURE",
        l.key,
        f,
        !1
      ), l.isNull || (this.notiTexture = setInterval(() => {
        var C;
        ((C = window.unitygameinstance) == null ? void 0 : C.Module.LoadTextureZipCS) != null && (clearInterval(this.notiTexture), console.log("loaded texture", l), this.LoadPictureU3D(l.blobUrl, l.key));
      }, 100));
    } else
      l.isNull || (this.notiTexture = setInterval(() => {
        var f;
        ((f = window.unitygameinstance) == null ? void 0 : f.Module.LoadTextureZipCS) != null && (console.log("loaded texture", l), clearInterval(this.notiTexture), this.LoadPictureU3D(l.blobUrl));
      }, 100));
    var c = !1, w = await this.CheckDataBase(a.id);
    w ? (await this.CheckDataBaseValueList(
      t.models,
      a.id,
      "DATA"
    ), t.models.find((f) => f.isDownloaded == !1) != null && (c = !0)) : c = !0, c ? (console.log("Flow Type"), this.NotiUnity(r), this.downloadFilesConcurrently(o, s, r).then(() => {
      console.log("All files have been downloaded.");
    }).catch((f) => {
      console.error("Error during downloads:", f);
    })) : (console.log("Cache Type", t), this.notiUnityByCache = setInterval(() => {
      var f, C, g, m;
      if (((f = window.unitygameinstance) == null ? void 0 : f.Module.LoadMessage) == null || ((C = window.unitygameinstance) == null ? void 0 : C.Module.ChangeLoadCount) == null) {
        console.log(
          "Waiting for Unity",
          (g = window.unitygameinstance) == null ? void 0 : g.Module.LoadMessage,
          (m = window.unitygameinstance) == null ? void 0 : m.Module.ChangeLoadCount
        );
        return;
      }
      clearInterval(this.notiUnityByCache), this.ChangeLoadCount(), this.LoadALLModels(JSON.stringify(t));
    }, 1e3));
  },
  notiSheets: /* @__PURE__ */ new Map(),
  async downloadFilesConcurrently(e, n, t) {
    let o = 0, a = 0, l = [];
    var s = this.downloadFile, r = this.SetAndGetIndexedDB, u = this.notifyUser;
    async function d() {
      if (o >= e.length)
        return;
      const w = o++, f = e[w], C = e[w].url;
      try {
        const g = await s(C), m = await r(
          t.id,
          "DATA",
          f.modelID,
          g,
          !1
        );
        f.blobUrl = m, l.push(f), a++, a % 100 === 0 && (u(
          `Downloaded ${a} files`,
          l,
          t
        ), l = []);
      } catch (g) {
        console.error(`Error downloading ${C}:`, g);
      }
      await d();
    }
    const c = Array(Math.min(n, e.length)).fill(null).map(d);
    await Promise.all(c), l.length > 0 && this.notifyUser(
      `Downloaded ${a} files`,
      l,
      t
    );
  },
  NotiUnity(e) {
    var n = e.notiSheetsContext.get(e.id), t = void 0;
    this.notiUnityByFlow = setInterval(() => {
      var l, s, r, u;
      if (((l = window.unitygameinstance) == null ? void 0 : l.Module.AddLoadQueue) == null || ((s = window.unitygameinstance) == null ? void 0 : s.Module.InitCamPos) == null) {
        console.log(
          "Waiting for Unity",
          (r = window.unitygameinstance) == null ? void 0 : r.Module.AddLoadQueue,
          (u = window.unitygameinstance) == null ? void 0 : u.Module.InitCamPos
        );
        return;
      }
      if (console.log("NotiUnity ing"), console.log("notiSheet:", n), t = n.notiFiles.find((d) => d.isNoti == !1), console.log("nitiContent:", t), t != null) {
        t.isNoti = !0, n.notiCount++, n.notiFileCount += t.files.length;
        var o = n.notiCount === 1 ? 0 : n.notiFileCount === n.fileCount ? 2 : n.notiCount > 1 && n.notiFileCount !== n.fileCount ? 1 : void 0, a = {
          models: t.files,
          status: o,
          maxcount: 500
        };
        console.log(
          "Send Unity",
          n.notiCount,
          n.notiFileCount,
          a
        ), o == 0 && (console.log("InitCamPos", typeof e.view), this.InitCamPos(JSON.stringify(e.view))), this.AddLoadQueue(JSON.stringify(a));
      }
      n.notiFileCount == n.fileCount && (clearInterval(this.notiUnityByFlow), console.log("NotiUnity end"));
    }, 1e3);
  },
  notifyUser(e, n, t) {
    var o = t.notiSheetsContext.get(t.id);
    console.log("Files:", n, t, o), console.log("notiSheet", o, o == null ? void 0 : o.notiFiles), o.notiFiles.push({ isNoti: !1, files: n }), o.downloadCount += n.length, console.log("notiSheets", o);
  },
  downloadFile(e) {
    try {
      return new Promise((n, t) => {
        const o = new XMLHttpRequest();
        o.timeout = 6e4, o.open("GET", e), o.responseType = "blob", o.onload = () => {
          if (o.status === 200) {
            var a = new Uint8Array(o.response);
            let l = new FileReader();
            l.readAsDataURL(o.response), l.onload = function(s) {
              D = l.result.split(",")[1];
              const r = atob(D);
              var u = new Uint8Array(r.length);
              for (let d = 0; d < r.length; d++)
                u[d] = r.charCodeAt(d);
              n(u);
            };
          } else
            n(null), t(o.statusText);
        }, o.ontimeout = () => {
          t("timeout");
        }, o.onerror = () => {
          t("error");
        }, o.send(() => {
          console.log("send error");
        });
      });
    } catch (n) {
      console.log(n + "DownloadResource");
    }
  },
  //排序
  sortByAccessAndTime(e) {
    return e.sort((n, t) => {
      const o = n.AccessCount - t.AccessCount;
      return o === 0 ? n.LastAccessTime.getTime() - t.LastAccessTime.getTime() : o;
    });
  },
  async Download() {
    var e = [];
    this.obj.models.forEach((t) => {
      e.push({ name: t.modelID, url: t.url });
    }), this.dbInfos.push({
      dbName: "data",
      isExist: {},
      isAllDone: !0,
      keys: e
    }), this.dbInfos.push({
      dbName: "texture",
      isExist: {},
      keys: [this.obj.texturezip]
    }), await this.CheckDatabaseExists(this.dbInfos), console.log(this.dbInfos);
    let n = this.dbInfos.map(async (t) => {
      await this.CheckIndexedDBValue(t);
    });
    await Promise.all(n), console.log(this.dbInfos), this.dbInfos[0].keys.find((t) => t.isDownloaded == !1) || this.dbInfos[1].keys.find((t) => t.isDownloaded == !1) ? this.dbInfos.map((t) => {
      t.keys.map((o) => {
        o.isDownloaded == !1 && this.enqueue({ url: o.url, dbName: t.dbName, name: o.name });
      });
    }) : this.AfterDownResource();
  },
  //对外接口
  _InitModel(e, n, t) {
    t == null && this.startDownload(e, n);
  },
  EnqueueInit(e) {
    this.InitQueue.queue.push(e), console.log("Push task"), this.StartNextInit();
  },
  StartNextInit() {
    for (console.log("InitQueue.queue.length", this.InitQueue.queue.length), console.log(
      "this.InitQueue.activeQueue.length",
      this.InitQueue.activeQueue.length
    ); this.InitQueue.queue.length > 0 && this.InitQueue.activeQueue.length < this.InitQueue.maxActive; ) {
      const e = this.InitQueue.queue.shift();
      this.InitTask(e);
    }
  },
  InitTask(e) {
    this.InitQueue.activeQueue.push(e), this.InitSingleModel(e.jsonStr, e.cb);
  },
  DownloadQueue: {
    queue: [],
    activeDownloads: [],
    maxConcurrentDownloads: 1300
  },
  enqueue(e) {
    this.DownloadQueue.queue.push(e), this.StartNextDownloads(e);
  },
  async StartNextDownloads(e) {
    for (; this.DownloadQueue.queue.length > 0 && this.DownloadQueue.activeDownloads.length < this.DownloadQueue.maxConcurrentDownloads; ) {
      const n = this.DownloadQueue.queue.shift();
      await this.DownloadTask(n);
    }
  },
  async DownloadTask(e) {
    this.DownloadQueue.activeDownloads.push(e);
    try {
      await this.DownloadResource(e.url).then(async (n) => {
        await this.SetIndexedDB(e.dbName, e.name, n);
      });
    } finally {
      this.DownloadQueue.activeDownloads.shift(e), this.StartNextDownloads(), this.DownloadQueue.activeDownloads.length == 0 && (console.log("All Done"), this.AfterDownResource());
    }
  },
  async AfterDownResource() {
    var e = this.dbInfos.map(async (a) => {
      await this.GetIndexedDBBlobUrls(a.dbName, a.keys);
    });
    await Promise.all(e), console.log("url done", this.dbInfos);
    var n = this.dbInfos.find((a) => a.dbName === "texture");
    console.log(n);
    var t = this.dbInfos.find((a) => a.dbName === "data");
    e = t.keys.map(async (a) => {
      await delete a.url;
    }), await Promise.all(e), console.log(t), e = this.obj.models.map((a) => {
      delete a.url;
    }), console.log("obj", this.obj);
    var o = setInterval(() => {
      console.log("module1.unityloadpro 0", y.unityloadpro), y.unityloadpro && (console.log("module1.unityloadpro 1", y.unityloadpro), clearInterval(o), console.log("start call unity api "), this.LoadCallBack(
        n.keys[0].bloburl,
        JSON.stringify(t.keys),
        JSON.stringify(this.obj)
      ), this.obj = null, this.dbInfos = null);
    }, 1e3);
  },
  LoadCallBack(e, n, t) {
    var o = setInterval(() => {
      if (typeof window.unitygameinstance.Module.BlobMessage > "u")
        console.log("加载中");
      else {
        clearInterval(o), this.LoadBIMBegin(e, n, t);
        return;
      }
    }, 100);
  },
  LoadBIMBegin(e, n, t) {
    console.log("dbtexture", e), console.log("dbobj", n), console.log("json", t), e && this.LoadTextureZip(e, this.Msg), this.AddBlob2U3D(n, this.BlobCallBack), this.AddModelMsg2U3D(t, this.ModelMsgCallBack);
  },
  AddModelMsg2U3D(e, n) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "LoadMessage",
      "vii",
      [typeof e, typeof n],
      [e, n]
    );
  },
  // onError(obj) {
  //   if (window) {
  //     window.callbacks(obj);
  //   } else {
  //     console.log(obj);
  //   }
  // },
  ModelMsgCallBack(e) {
    console.log("LoadMessage:" + e), e.indexOf("已成功添加模型信息") >= 0 && (window.unitygameinstance.Module.DynCallCSFunc(
      "ChangeLoadCount",
      "ii",
      ["number"],
      [500]
    ), window.unitygameinstance.Module.DynCallCSFunc(
      "BeginLoad",
      "vii",
      [typeof y.loadcallback, typeof y.OnLoadAdapter],
      [y.loadcallback, y.OnLoadAdapter]
    ));
  },
  OnLoadAdapter(e, n) {
    var t = y.InitQueue.activeQueue.shift();
    y.modelInfoDict.get(t.id).isInstantiated = !0;
    var o, a;
    JSON.parse(t.jsonStr).models.map((l) => {
      o = l.modelID.replace(".ab", ""), a = y._UUID2ID(o), a == null ? console.log("id.obj is undefined", o) : (y.modelInfoDict.get(t.id).uuidDict.set(o, { instanceID: [JSON.parse(a).id] }), l.copies.map((s) => {
        a = y._UUID2ID(s.modelID), a == null ? console.log("id.obj is undefined", s.modelID) : y.modelInfoDict.get(t.id).uuidDict.get(o).instanceID.push(JSON.parse(a).id);
      }));
    });
  },
  OnLoadAdapterSleep(e, n) {
    console.log("OnLoadAdapterSleep", e, n);
  },
  AddBlob2U3D(e, n) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "BlobMessage",
      "vii",
      [typeof e, typeof n],
      [e, n]
    );
  },
  BlobCallBack(e) {
    console.log("BlobMessage:" + e);
  },
  Msg(e) {
    console.log("LoadTextureZip:" + e);
  },
  getTem(e) {
    var n = e.models;
    for (let t = 0; t < n.length; t++) {
      this.temdic(n[t].modelID, n[t].modelID);
      let o = JSON.stringify(n[t].materials);
      this.matdic(n[t].modelID, o);
      for (let a = 0; a < n[t].copies.length; a++) {
        this.temdic(
          n[t].copies[a].modelID + ".ab",
          n[t].modelID
        );
        let l = JSON.stringify({
          x: n[t].copies[a].x,
          y: n[t].copies[a].y,
          z: n[t].copies[a].z
        });
        this.posdic(n[t].copies[a].modelID + ".ab", l);
      }
    }
    console.log("添加完成"), this.loadtestin(e.view);
  },
  temdic(e, n) {
    let t = e, o = n;
    window.unitygameinstance.Module.DynCallCSFunc(
      "UUid2TemId",
      "vii",
      [typeof t, typeof o],
      [t, o]
    );
  },
  posdic(e, n) {
    let t = e, o = n;
    window.unitygameinstance.Module.DynCallCSFunc(
      "AddPosDic",
      "vii",
      [typeof t, typeof o],
      [t, o]
    );
  },
  matdic(e, n) {
    let t = e, o = n;
    window.unitygameinstance.Module.DynCallCSFunc(
      "AddMatDic",
      "vii",
      [typeof t, typeof o],
      [t, o]
    );
  },
  LoadPicture(e, n) {
    let t = e, o = n;
    window.unitygameinstance.Module.DynCallCSFunc(
      "LoadPicture",
      "vii",
      [typeof t, typeof o],
      [t, o]
    );
  },
  LoadTextureZip(e, n) {
    try {
      window.unitygameinstance.Module.DynCallCSFunc(
        "LoadTextureZipCS",
        "vii",
        [typeof e, typeof n],
        [e, n]
      );
    } catch (t) {
      console.log(t);
    }
  },
  loadtestin(e, n) {
    console.log(e, "loadtestin");
    var t = Object.entries(e);
    y.data = t[0], this.downloadall(y.data).then((o) => {
      console.log(o), this.loadtestout(e);
    });
  },
  loadtestout(e, n) {
    console.log(e, "loadtestout");
    var t = Object.entries(e);
    y.data = t[1], this.downloadall(y.data).then((o) => {
      console.log(o);
      try {
        this.beginLoad();
      } catch (a) {
        console.log(a);
      }
    });
  },
  downloadall(e, n) {
    return new Promise((t, o) => {
      var a = Object.entries(e[1]);
      window.unitygameinstance.Module.DynCallCSFunc(
        "ChangeLoadCount",
        "ii",
        ["number"],
        [500]
      ), window.unitygameinstance.Module.DynCallCSFunc(
        "ChangeDrawCount",
        "ii",
        ["number"],
        [1]
      ), a.length;
      for (let l = 0; l < a.length; l++) {
        for (let s = 0; s < a[l][1].out.length; s++) {
          let r = a[l][1].out[s] + ".ab";
          window.unitygameinstance.Module.DynCallCSFunc(
            "GetLoadList",
            "ii",
            [typeof r],
            [r]
          );
        }
        for (let s = 0; s < a[l][1].in.length; s++) {
          let r = a[l][1].in[s] + ".ab";
          window.unitygameinstance.Module.DynCallCSFunc(
            "GetLoadList",
            "ii",
            [typeof r],
            [r]
          );
        }
      }
      t("scuss!!!");
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
  _AllToTransById(e, n) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "AllToTransById",
      "vif",
      [typeof e, typeof n],
      [e, n]
    );
  },
  _AllToPbrById(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "AllToPbrById",
      "vi",
      [typeof e],
      [e]
    );
  },
  _ToTransById(e, n, t) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "ToTransById",
      "vfff",
      [typeof e, typeof n, typeof t],
      [e, n, t]
    );
  },
  _ToPbrById(e, n) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "ToPbrById",
      "vif",
      [typeof e, typeof n],
      [e, n]
    );
  },
  GetUrl_H5(e) {
    var n = y.urldic[e];
    return typeof n > "u" && (n = "Error"), n;
  },
  GetIndexedDBBlobUrls(e, n) {
    var t = e.toUpperCase(), o = this.GetValue;
    return new Promise((a, l) => {
      var s = window.indexedDB, r = s.open(e, 1);
      r.onerror = function(u) {
        l("error");
      }, r.onsuccess = async function(u) {
        var d = r.result, c = d.transaction([t], "readwrite");
        n.forEach(async (w, f) => {
          let C = await o(c, t, w.name);
          var g = window.URL || window.webkitURL;
          w.bloburl = g.createObjectURL(new Blob([C])), f == n.length - 1 && a(n);
        });
      };
    });
  },
  async SetAndGetIndexedDB(e, n, t, o, a) {
    if (console.log("SetAndGetIndexedDB", e, t, typeof o, a), t == null || t == null || t == "")
      resolve("success");
    else
      return new Promise((l, s) => {
        var r = e, u = n, d = window.indexedDB, c = d.open(r, 1);
        c.onerror = function(w) {
          s("error");
        }, c.onsuccess = function(w) {
          var C = w.target.result.transaction(u, "readwrite"), g = C.objectStore(u);
          if (a) {
            var m = g.get(t);
            m.onsuccess = function(h) {
              var S = window.URL || window.webkitURL, p = S.createObjectURL(
                new Blob([h.target.result])
              );
              l(p);
            };
          } else {
            var m = g.put(o, t);
            m.onsuccess = function(S) {
              m = g.get(t), m.onsuccess = function(p) {
                var b = window.URL || window.webkitURL, v = b.createObjectURL(
                  new Blob([p.target.result])
                );
                l(v);
              };
            }, m.onerror = function(S) {
              l("error");
            };
          }
        }, c.onupgradeneeded = function(w) {
          w.target.result.createObjectStore(u, {});
        };
      });
  },
  // 新增
  // 关闭鼠标事件
  _EnableMove(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "EnableMove",
      "vi",
      [typeof e],
      [e]
    );
  },
  ChangeLoadCount() {
    window.unitygameinstance.Module.DynCallCSFunc(
      "ChangeLoadCount",
      "ii",
      ["number"],
      [500]
    );
  },
  //有缓存后 一次性加载接口
  LoadALLModels(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "LoadMessage",
      "viii",
      [
        typeof e,
        typeof y.loadcallback,
        typeof y.OnLoadAdapterSleep
      ],
      [e, y.loadcallback, y.OnLoadAdapterSleep]
    );
  },
  AddLoadQueue(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "AddLoadQueue",
      "viii",
      [
        typeof e,
        typeof y.loadcallback,
        typeof y.OnLoadAdapterSleep
      ],
      [e, y.loadcallback, y.OnLoadAdapterSleep]
    );
  },
  InitCamPos(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "InitCamPos",
      "vi",
      [typeof e],
      [e]
    );
  },
  EnableLog(e) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "EnableLog",
      "vi",
      [typeof e],
      [e]
    );
  },
  LoadPictureU3D(e, n) {
    window.unitygameinstance.Module.DynCallCSFunc(
      "LoadTextureZipCS",
      "vii",
      [typeof e, this.AdapterLog],
      [e, this.OnLog]
    );
  },
  AdapterLog(e, n, t) {
  }
};
const i = y, _ = {
  // 开启点击
  EnableClick(e, n) {
    return i._EnableClick(e, n);
  },
  // 点击事件颜色
  SetSelectionInnerColor(e, n, t, o) {
    return i._SetSelectionInnerColor(e, n, t, o);
  },
  //获取物体信息 int id,string type
  GetPropertyById(e, n) {
    return i._GetPropertyById(e, n);
  },
  //获取物体所有信息
  GetObjectAllPropertiesById(e) {
    return i._GetObjectAllPropertiesById(e);
  },
  //设置鼠标覆盖层
  SetHoverLayer(e) {
    return i._SetHoverLayer(e.join(" "));
  },
  //清空鼠标覆盖层
  ClearHoverLayer() {
    return i._ClearHoverLayer();
  },
  //开关鼠标覆盖
  EnableHover(e, n) {
    return i._EnableHover(e, n);
  },
  //设置点击层
  SetClickLayer(e) {
    return i._SetClickLayer(e.join(" "));
  },
  //清空点击层
  ClearClickLayer() {
    return i._ClearClickLayer();
  },
  // //开关漫游
  // EnableRoaming(EnableRoaminglayers) {
  //   return UCDWISDOMSDK._EnableRoaming(EnableRoaminglayers);
  // },
  //开关拖拽
  EnableDrag(e, n, t) {
    return i._EnableDrag(e, n, t);
  },
  //设置拖拽层
  SetDragLayer(e) {
    return i._SetDragLayer(e);
  },
  //清空拖拽层
  ClearDragLayer() {
    return i._ClearDragLayer();
  },
  //显示所有选中的模型
  ShowSelects() {
    return i._ShowSelects();
  },
  //获取所有显示的模型
  GetShownObjs() {
    return i._GetShownObjs();
  },
  //显示模型
  ShowObj(e) {
    return i._ShowObj(e);
  },
  // 只显示选中模型
  ShowSelects(e) {
    return i._ShowSelects(e);
  },
  // 隐藏某个模型
  HideObj(e) {
    return i._HideObj(e);
  },
  //隐藏所有模型
  HideAllObjs() {
    return i._HideAllObjs();
  },
  //隐藏模型
  HideObj(e) {
    return i._HideObj(e);
  },
  //获取所有隐藏的模型
  GetHiddenObjs() {
    return i._GetHiddenObjs();
  },
  //获取模型信息
  GetComponentsInfo(e) {
    return i._GetComponentsInfo(e);
  },
  // 射线管理（框选接口实现）
  EnableRectSelect(e, n) {
    return i._EnableRectSelect(e, n);
  },
  // 获取所有的射线层
  GetLayers() {
    return i._GetLayers();
  },
  // id转uuid
  ID2UUID(e) {
    return i._ID2UUID(e);
  },
  // uuid转id
  UUID2ID(e) {
    return Number(i._UUID2ID(e));
  },
  // 获取玩家信息
  GetPlayerInfo() {
    return i._GetPlayerInfo();
  },
  // 开关移动
  EnableMove(e) {
    return i._EnableMove(e);
  },
  // 设置玩家位置
  SetPlayerPosition(e, n, t) {
    return i._SetPlayerPosition(e, n, t);
  },
  // 设置玩家旋转
  SetPlayerEuler(e, n, t) {
    return i._SetPlayerEuler(e, n, t);
  },
  // 设置物体旋转
  SetObjectEuler(e, n, t, o) {
    return i._SetObjectEuler(e.toString(), n, t, o);
  },
  // 设置物体位置
  SetObjectPosition(e, n, t, o) {
    return i._SetObjectPosition(e.toString(), n, t, o);
  },
  /*
   *新增04/08（工具栏-画图功能）
   *
   */
  // 新增04/08
  // 添加文本框
  AddInputTextUI(e, n, t) {
    return i._AddInputTextUI(e, n, t);
  },
  // 画线
  AddLineUI(e, n, t) {
    return i._AddLineUI(e, n, t);
  },
  // 画框
  AddBoxUI(e, n, t) {
    return i._AddBoxUI(e, n, t);
  },
  // 画圆环
  AddAnnulusUI(e, n, t) {
    return i._AddAnnulusUI(e, n, t);
  },
  // 画箭头
  AddArrowUI(e, n, t) {
    return i._AddArrowUI(e, n, t);
  },
  // 进入创建UI状态
  EnableCreate3DUI(e) {
    return i._EnableCreate3DUI(e);
  },
  // 开关键盘事件
  EnableKeyboard(e) {
    return i._EnableKeyboard(e);
  },
  // 测量工具
  // 多段线
  EnableMultiLineTool(e, n, t) {
    return i._EnableMultiLineTool(e, n, t);
  },
  // 角度
  EnableAngleTool(e, n) {
    return i._EnableAngleTool(e, n);
  },
  // 体积
  EnableVolumeTool(e, n) {
    return i._EnableVolumeTool(e, n);
  },
  // 最短距离
  EnableMinDistanceTool(e, n) {
    return i._EnableMinDistanceTool(e, n);
  },
  // 面积
  EnableAreaTool(e, n, t) {
    return i._EnableAreaTool(e, n, t);
  },
  // 长度
  EnableLengthTool(e, n) {
    return i._EnableLengthTool(e, n);
  },
  // 4/22更新接口（动画编辑）
  // 设置灯光
  SetLightData(e) {
    return i._SetLightData(e);
  },
  // 设置天空盒
  SetSkybox(e) {
    return i._SetSkybox(e);
  },
  // 设置后处理
  SetVolumeData(e) {
    return i._SetVolumeData(e);
  },
  // 开启动画记录
  EnableAnimationRecord(e, n) {
    return i._EnableAnimationRecord(e, n);
  },
  // 开始
  PlayAnimation(e, n) {
    return i._PlayAnimation(e, n);
  },
  // 设置动画帧
  SetAnimationFrame(e) {
    return i._SetAnimationFrame(e);
  },
  // 删除批注（所有）
  RemoveAllAnnotations() {
    return i._RemoveAllAnnotations();
  },
  // 添加光源（灯光类型）
  AddLight(e, n) {
    return i._AddLight(e, n);
  },
  // 删除光源
  RemoveAllLights() {
    return i._RemoveAllLights();
  },
  /**
   * 04/24新增接口*/
  //  设置环境光
  SetEnvironmentLight(e) {
    return i._SetEnvironmentLight(e);
  },
  // 开启场景编辑器记录
  EnableSceneEdit(e) {
    return i._EnableSceneEdit(e);
  },
  // 导入场景编辑器记录
  ImportSceneTempData() {
    return i._ImportSceneTempData();
  },
  // 删除批注（关闭）
  CompleteAllAnnotations() {
    return i._CompleteAllAnnotations();
  },
  // 删除测量数据
  RemoveAllMeasureTools() {
    return i._RemoveAllMeasureTools();
  },
  // 隐藏测量数据
  HideAllMeasureTools(e) {
    return i._HideAllMeasureTools(e);
  },
  // 设置lod剔除距离
  SetLODsScreenRelativeTransitionHeight(e) {
    return i._SetLODsScreenRelativeTransitionHeight(e);
  },
  /**
   *
   * ldt新增接口
   *
   * */
  AllToTransById(e, n) {
    return i._AllToTransById(e, n);
  },
  //将模型所有材质转为实心
  AllToPbrById(e) {
    return i._AllToPbrById(e);
  },
  //将模型某一个mesh转为透明
  ToTransById(e, n, t) {
    return i._ToTransById(e, n, t);
  },
  ToPbrById(e, n) {
    return i._ToPbrById(e, n);
  },
  LookAtPos(e) {
    let n = {
      x: e.x,
      y: e.y,
      z: e.z
    };
    return i._LookAtPos(n);
  },
  ZoomIn() {
    return i._ZoomIn();
  },
  ZoomOut() {
    return i._ZoomOut();
  },
  // 04/24新增
  ToPerspective(e) {
    return i._ToPerspective(Number(e));
  },
  ToOrthographic(e) {
    return i._ToOrthographic(Number(e));
  },
  FrontView(e) {
    return i._FrontView(Number(e));
  },
  BackView(e) {
    return i._BackView(Number(e));
  },
  LeftView(e) {
    return i._LeftView(Number(e));
  },
  RightView(e) {
    return i._RightView(Number(e));
  },
  TopView(e) {
    return i._TopView(Number(e));
  },
  BottomView(e) {
    return i._BottomView(Number(e));
  },
  // 6/29
  EnableObservation(e) {
    i._EnableObservation(e);
  },
  ChangeMaterialInfo(e, n) {
    let t = JSON.stringify(n);
    i._ChangeMaterialInfo(e, t);
  },
  StartCrossById(e) {
    i._StartCrossById(Number(e));
  },
  StartCrossByModelRoot() {
    i._StartCrossByModelRoot();
  },
  RestoreCross() {
    i._RestoreCross();
  },
  ReCalculateBounds() {
    i._ReCalculateBounds();
  },
  /**
   *
   * wwj
   * **/
  // 下载单个模型
  LoadGlbAsync(e, n, t, o, a) {
    return i._LoadGlbAsync(
      e,
      n,
      t,
      o,
      a
    );
  },
  // 设置对象可见不可见
  GameObjSetActive(e, n, t) {
    return i._GameObjSetActive(e, n, t);
  },
  /*
   *资源下载-异步 资源查询、资源下载、资源释放接口实现
   *
   */
  // 下载资源
  LoadAndInstantiate(e, n, t) {
    return i._LoadAndInstantiate(e, n, t);
  },
  // 生成模型
  InstantiateObject(e, n, t, o) {
    return i._InstantiateObject(
      e,
      n,
      t,
      o
    );
  },
  // 卸载AB包
  UnLoadAssetBundle(e, n, t) {
    return i._UnLoadAssetBundle(e, n, t);
  },
  // 卸载所有AB包
  UnloadAllAssetBundles(e, n) {
    return i._UnloadAllAssetBundles(e, n);
  },
  // 销毁指定ID模型
  DestroyObject(e, n) {
    return i._DestroyObject(e, n);
  },
  // 销毁所有模型
  DestroyAllObject(e) {
    return i._DestroyAllObject(e);
  },
  // 开关行走
  EnableWalk(e) {
    return i._EnableWalk(e);
  },
  // 获取模型包围盒大小
  GetBoundsSizeByID(e) {
    return i._GetBoundsSizeByID(e.toString());
  },
  // 获取模型包围盒中心
  GetBoundsCenterByID(e) {
    return i._GetBoundsCenterByID(e.toString());
  },
  // 获取主画布宽高
  GetMainCanvasWH() {
    return i._GetMainCanvasWH();
  },
  // 开关UI滑动条
  UIAutoFit(e) {
    return i._UIAutoFit(e);
  },
  // 创建节点
  createElement() {
    return i._createElement();
  },
  // 添加事件
  addEleEvent() {
    return i._addEleEvent();
  },
  // 加载
  init() {
    return i._init();
  },
  //  销毁
  quitUnity1() {
    return i._quitUnity();
  },
  //  销毁
  onUnmountedunity() {
    return i._onUnmountedunity();
  },
  // 添加标签
  AddTags(e, n) {
    return i._AddTags(JSON.stringify(e), n);
  },
  // 删除单个标签
  RemoveTag(e) {
    return i._RemoveTag(e);
  },
  // 删除所有标签
  RemoveAllTags() {
    return i._RemoveAllTags();
  },
  // 更新标签
  UpdateTags(e, n) {
    return i._UpdateTags(JSON.stringify(e), n);
  },
  // 1/8新增
  // 设置文字对齐方式 string
  SetTextAlignment(e) {
    return i._SetTextAlignment(e);
  },
  // 设置字体 string
  SetTextFont(e) {
    return i._SetTextFont(e);
  },
  // 设置字体
  // , SetTextAlignment() {
  //   _SetTextAlignment();
  // }
  // 设置字体颜色 int int int int
  SetTextColor(e, n, t, o) {
    return i._SetTextColor(e, n, t, o);
  },
  // 设置字体大小 float
  SetTextSize(e) {
    return i._SetTextSize(e);
  },
  // 设置线路宽度 float
  SetRouteWidth(e) {
    return i._SetRouteWidth(e);
  },
  // 设置线路颜色 int int int int
  SetRouteColor(e, n, t, o) {
    return i._SetRouteColor(e, n, t, o);
  },
  // 设置线路材质 string
  SetRouteMaterial(e) {
    return i._SetRouteMaterial(e);
  },
  //设置线路显隐 bool
  SetRouteVisible(e) {
    return i._SetRouteVisible(e);
  },
  //设置导航速度 float
  SetRoamSpeed(e) {
    return i._SetRoamSpeed(e);
  },
  //暂停导航 bool
  PauseRoam(e) {
    return i._PauseRoam(e);
  },
  //结束导航
  EndRoam() {
    return i._EndRoam();
  },
  //改变导航点位 int
  ChangeRoamPoint(e) {
    return i._ChangeRoamPoint(e);
  },
  //导航到达点位回调 string
  RoamArriveEvent(e) {
    return i._RoamArriveEvent(e);
  },
  //开始导航 string
  StartRoam(e) {
    return i._StartRoam(JSON.stringify(e));
  },
  // 1/8合并代码
  //设置属性信息
  SetPropertyById(e, n, t) {
    typeof t == "boolean" && (t == !0 ? t = "True" : t = "False"), i._SetPropertyById(e, n, t);
  },
  //根据名字获取id
  GetObjectByName(e) {
    return i._GetObjectByName(e);
  },
  //根据layer获取id
  GetObjectByLayer(e) {
    return i._GetObjectByLayer(e);
  },
  //根据type获取id
  GetObjectByType(e) {
    return console.log(e), i._GetObjectByType(e);
  },
  //根据id获取子物体的id
  GetObjectChilds(e) {
    return i._GetObjectChilds(e);
  },
  //添加Object
  AddObject(e, n, t, o, a) {
    var l = {
      x: t.x,
      y: t.y,
      z: t.z
    }, s = {
      x: o.x,
      y: o.y,
      z: o.z
    }, r = {
      x: a.x,
      y: a.y,
      z: a.z
    }, u = {
      type: e,
      Id: n,
      position: l,
      eulerAngle: s,
      localScale: r
    };
    return i._AddObject(u);
  },
  //克隆对象
  CloneObject(e, n, t) {
    return (t = null) && (t = !0), i._CloneObject(e, n, t);
  },
  //平滑移动
  DoMove(e, n, t) {
    var o = {
      x: n.x,
      y: n.y,
      z: n.z
    };
    return i._DoMove(e, o, t);
  },
  //平滑移动
  DoLocalMove(e, n, t) {
    var o = {
      x: n.x,
      y: n.y,
      z: n.z
    };
    return i._DoLocalMove(e, o, t);
  },
  //平滑旋转
  DoRotate(e, n, t) {
    var o = {
      x: n.x,
      y: n.y,
      z: n.z
    };
    return i._DoRotate(e, o, t);
  },
  //平滑旋转
  DoLocalRotate(e, n, t) {
    var o = {
      x: n.x,
      y: n.y,
      z: n.z
    };
    return i._DoLocalRotate(e, o, t);
  },
  //平滑缩放
  DoLocalScale(e, n, t) {
    let o = {
      x: n.x,
      y: n.y,
      z: n.z
    };
    return i._DoLocalScale(e, o, t);
  },
  //获取主相机Id
  GetMainCameraId() {
    let e = i._GetMainCameraId();
    return Number(e);
  },
  //根据相机Id，获取渲染的layer
  GetCullingMask(e) {
    return i._GetCullingMask(Number(e));
  },
  //设置某id相机渲染的layers
  SetCullingMask(e, n) {
    return i._SetCullingMask(Number(e), [n]);
  },
  //给某id相机添加一个渲染的layer
  AddCullingMask(e, n) {
    return i._AddCullingMask(Number(e), n);
  },
  //给某id相机移除一个渲染的layer
  RemoveCullingMask(e, n) {
    return i._RemoveCullingMask(Number(e), n);
  },
  //看向某个object
  FocusObject(e, n) {
    return i._FocusObject(e, Number(n));
  },
  //看向某个object
  FocusObjectOffset(e, n, t, o) {
    let a = {
      x: t.x,
      y: t.y,
      z: t.z
    }, l = null;
    return o != null && (l = {
      x: o.x,
      y: o.y,
      z: o.z
    }), i._FocusObjectOffset(e, n, a, l);
  },
  //高亮某个object
  HighLightById(e, n, t, o) {
    let a = null;
    o.color != null && (a = {
      r: o.color.r,
      g: o.color.g,
      b: o.color.b,
      a: o.color.a
    });
    let l = {
      _intensity: o.intensity,
      _isOn: o.isOn,
      _color: a,
      _width: o.width,
      _speed: o.speed,
      _texture: o.texture,
      _blending: o.blending,
      _initialScale: o.initialScale,
      _endScale: o.endScale,
      _noise: o.noise
    };
    return i._HighLightById(e, n, t, l);
  },
  Downloade(e) {
    return i._Downloade(e);
  },
  InitModel(e, n) {
    return i._InitModel(JSON.stringify(e), n);
  },
  AllToTransById(e, n) {
    return i._AllToTransById(e, n);
  },
  AllToPbrById(e) {
    return i._AllToPbrById(e);
  },
  ToTransById(e, n, t) {
    return i._ToTransById(e, n, t);
  },
  ToPbrById(e, n) {
    return i._ToPbrById(e, n);
  },
  // 开关鼠标
  EnableMove(e) {
    return i._EnableMove(e);
  }
};
export {
  _ as default
};
