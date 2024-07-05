(function (p, c) {
  typeof exports == "object" && typeof module < "u"
    ? (module.exports = c())
    : typeof define == "function" && define.amd
    ? define(c)
    : ((p = typeof globalThis < "u" ? globalThis : p || self),
      (p.WEBSDK = c()));
})(this, function () {
  "use strict";
  var p,
    c = {
      data: null,
      loadcallback: null,
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
      _HighLightById(e, n, t, o) {
        try {
          window.unitygameinstance.Module.DynCallCSFunc(
            "HighLightById",
            "iiiii",
            [typeof e, typeof n, typeof t, typeof JSON.stringify(o)],
            [e, n, t, JSON.stringify(o)]
          );
        } catch (a) {
          console.log(a);
        }
      },
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
      _ShowSelects() {
        try {
          window.unitygameinstance.Module.DynCallCSFunc(
            "ShowSelects",
            "v",
            [],
            []
          );
        } catch (e) {
          console.log(e);
        }
      },
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
      _HideAllObjs() {
        try {
          window.unitygameinstance.Module.DynCallCSFunc(
            "HideAllObjs",
            "v",
            [],
            []
          );
        } catch (e) {
          console.log(e);
        }
      },
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
      _GetHiddenObjs() {
        try {
          let e = window.unitygameinstance.Module.DynCallCSFunc(
            "GetHiddenObjs",
            "i",
            [],
            []
          );
          return (
            console.log(JSON.parse(JSON.stringify(e))),
            JSON.parse(JSON.stringify(e))
          );
        } catch (e) {
          console.log(e);
        }
      },
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
      _ID2UUID(e) {
        try {
          let n = window.unitygameinstance.Module.DynCallCSFunc(
            "ID2UUID",
            "ii",
            [typeof e],
            [e]
          );
          return (
            console.log(JSON.parse(JSON.stringify(n))),
            JSON.parse(JSON.stringify(n))
          );
        } catch (n) {
          console.log(n);
        }
      },
      _UUID2ID(e) {
        try {
          let n = window.unitygameinstance.Module.DynCallCSFunc(
            "UUID2ID",
            "ii",
            [typeof e],
            [e]
          );
          return (
            console.log(JSON.parse(JSON.stringify(n))),
            JSON.parse(JSON.stringify(n))
          );
        } catch (n) {
          console.log(n);
        }
      },
      _GetPlayerInfo() {
        try {
          let e = window.unitygameinstance.Module.DynCallCSFunc(
            "GetPlayerInfo",
            "i",
            [],
            []
          );
          return (
            console.log(JSON.parse(JSON.stringify(e))),
            JSON.parse(JSON.stringify(e))
          );
        } catch (e) {
          console.log(e);
        }
      },
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
      _LoadAndInstantiate(e, n, t) {
        try {
          window.unitygameinstance.Model.Destroylayer(
            "LoadAndInstantiate",
            "viii",
            [typeof e, typeof n, typeof t],
            [e, n, t]
          );
        } catch {}
      },
      _InstantiateObject(e, n, t, o) {
        try {
          window.unitygameinstance.Module.DynCallCSFunc(
            "InstantiateObject",
            "viiii",
            [typeof e, typeof n, typeof t, typeof o],
            [e, n, t, o]
          );
        } catch (a) {
          console.log(a);
        }
      },
      _UnLoadAssetBundle(e, n, t) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "UnLoadAssetBundle",
          "viii",
          [typeof e, typeof n, typeof t],
          [e, n, t]
        );
      },
      _UnloadAllAssetBundles(e, n) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "UnloadAllAssetBundlesCS",
          "vii",
          [typeof e, typeof n],
          [e, n]
        );
      },
      _DestroyObject(e, n) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "DestroyObject",
          "vii",
          [typeof e, typeof n],
          [e, n]
        );
      },
      _DestroyAllObject(e) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "DestroyAllObject",
          "vi",
          [typeof e],
          [e]
        );
      },
      _EnableWalk(e) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "EnableWalk",
          "vi",
          [typeof e],
          [e]
        );
      },
      _GetBoundsSizeByID(e) {
        let n = window.unitygameinstance.Module.DynCallCSFunc(
          "GetBoundsSizeByID",
          "ii",
          [typeof e],
          [e]
        );
        return (
          console.log(JSON.parse(JSON.stringify(n))),
          JSON.parse(JSON.stringify(n))
        );
      },
      _GetBoundsCenterByID(e) {
        let n = window.unitygameinstance.Module.DynCallCSFunc(
          "GetBoundsCenterByID",
          "ii",
          [typeof e],
          [e]
        );
        return (
          console.log(JSON.parse(JSON.stringify(n))),
          JSON.parse(JSON.stringify(n))
        );
      },
      _GetMainCanvasWH(e) {
        let n = window.unitygameinstance.Module.DynCallCSFunc(
          "GetMainCanvasWH",
          "ii",
          [typeof e],
          [e]
        );
        return JSON.parse(JSON.stringify(n));
      },
      _UIAutoFit(e) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "UIAutoFit",
          "vi",
          [typeof e],
          [e]
        );
      },
      _createElement() {
        let e = document.getElementById("UCDunity");
        (e.innerHTML = `<div class="unity-con" style="width:100%;height:100%">
    <div id="unity-container" class="unity-desktop" style="width:100%;height:100%">
      <canvas id="unity-canvas" width=960 height=600 tabindex="-1"></canvas>
      <div id="unity-loading-bar">
        <div id="unity-logo"></div>
        <div id="unity-progress-bar-empty">
          <div id="unity-progress-bar-full"></div>
        </div>
      </div>
    </div>
  </div>`),
          e.parentNode.appendChild(e),
          (e = e);
      },
      _addEleEvent() {
        document.querySelector("#unity-container");
        var e = document.querySelector("#unity-canvas"),
          n = document.querySelector("#unity-loading-bar");
        document.querySelector("#unity-progress-bar-full"),
          document.querySelector("#unity-fullscreen-button");
        var t = document.querySelector("#unity-warning");
        function o(u, d) {
          function y() {
            t.style.display = t.children.length ? "block" : "none";
          }
          var f = document.createElement("div");
          (f.innerHTML = u),
            t.appendChild(f),
            d == "error"
              ? (f.style = "background: red; padding: 10px;")
              : (d == "warning" &&
                  (f.style = "background: yellow; padding: 10px;"),
                setTimeout(function () {
                  t.removeChild(f), y();
                }, 5e3)),
            y();
        }
        var a = "/incter/api/model_unity/unity/Build/UnityMain.loader.js",
          l = {
            dataUrl: "/incter/api/model_unity/unity/Build/UnityMain.data",
            frameworkUrl:
              "/incter/api/model_unity/unity/Build/UnityMain.framework.js",
            codeUrl: "/incter/api/model_unity/unity/Build/UnityMain.wasm",
            streamingAssetsUrl: "StreamingAssets",
            companyName: "DefaultCompany",
            productName: "BIMEngine",
            productVersion: "0.1.0",
            showBanner: o,
          };
        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
          var s = document.createElement("meta");
          (s.name = "viewport"),
            (s.content =
              "width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes"),
            document.getElementsByTagName("head")[0].appendChild(s),
            (e.className = "unity-mobile");
        } else (e.style.width = "100%"), (e.style.height = "100%");
        n.style.display = "block";
        var r = document.createElement("script");
        (r.src = a),
          (r.onload = () => {
            var u = document.querySelector("#unity-canvas");
            createUnityInstance(u, l, this.UnityLoading)
              .then((d) => {
                (window.unitygameinstance = d), (n.style.display = "none");
              })
              .catch((d) => {
                alert(d);
              });
          }),
          document.body.appendChild(r);
      },
      unityloadpro: null,
      UnityLoading(e) {
        (c.unityloadpro = e), console.log("", c.unityloadpro);
      },
      _init() {
        this._createElement(), this._addEleEvent();
      },
      _quitUnity() {
        window.unitygameinstance.Quit(function () {
          console.log("quit done!");
        }),
          (window.unitygameinstance = null);
        var e = document.querySelector("#unity-canvas");
        e.remove(), (e = null), this._createElement(), this._addEleEvent();
      },
      InitQueue: { isBusy: !1, queue: [], activeQueue: [], maxActive: 1 },
      modelInfoDict: new Map(),
      _onUnmountedunity() {
        window.unitygameinstance.Quit(function () {
          console.log("quit done!");
        }),
          (window.unitygameinstance = null);
        var e = document.querySelector("#unity-canvas");
        e.remove(),
          (e = null),
          (this.InitQueue = {
            isBusy: !1,
            queue: [],
            activeQueue: [],
            maxActive: 1,
          }),
          (this.modelInfoDict = new Map());
      },
      _AddTags(e, n) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "AddTags",
          "vii",
          ["string", typeof n],
          [e, n]
        );
      },
      _RemoveTag(e) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "RemoveTag",
          "vi",
          [typeof e],
          [e]
        );
      },
      _RemoveAllTags() {
        window.unitygameinstance.Module.DynCallCSFunc(
          "RemoveAllTags",
          "v",
          [],
          []
        );
      },
      _UpdateTags(e, n) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "UpdateTags",
          "vii",
          [typeof e, typeof n],
          [e, n]
        );
      },
      _SetTextAlignment(e) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "UIAutoFit",
          "vi",
          [typeof e],
          [e]
        );
      },
      _SetTextFont(e) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "SetTextFont",
          "vi",
          [typeof e],
          [e]
        );
      },
      _SetTextColor(e, n, t, o) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "SetTextColor",
          "viiii",
          [typeof e, typeof n, typeof t, typeof o],
          [e, n, t, o]
        );
      },
      _SetTextSize(e) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "SetTextSize",
          "vf",
          [typeof e],
          [e]
        );
      },
      _SetRouteWidth(e) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "SetRouteWidth",
          "vf",
          [typeof e],
          [e]
        );
      },
      _SetRouteColor(e, n, t, o) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "SetRouteColor",
          "viiii",
          [typeof e, typeof n, typeof t, typeof o],
          [e, n, t, o]
        );
      },
      _SetSelectionInnerColor(e, n, t, o) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "SetSelectionInnerColor",
          "viiii",
          [typeof e, typeof n, typeof t, typeof o],
          [e, n, t, o]
        );
      },
      _SetRouteMaterial(e) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "SetRouteMaterial",
          "vi",
          [typeof e],
          [e]
        );
      },
      _SetRouteVisible(e) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "SetRouteVisible",
          "vi",
          [typeof e],
          [e]
        );
      },
      _SetRoamSpeed(e) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "SetRoamSpeed",
          "vf",
          [typeof e],
          [e]
        );
      },
      _PauseRoam(e) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "PauseRoam",
          "vi",
          [typeof e],
          [e]
        );
      },
      _EndRoam() {
        window.unitygameinstance.Module.DynCallCSFunc("EndRoam", "v", [], []);
      },
      _ChangeRoamPoint(e) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "ChangeRoamPoint",
          "vi",
          [typeof e],
          [e]
        );
      },
      _RoamArriveEvent(e) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "RoamArriveEvent",
          "vi",
          [typeof e],
          [e]
        );
      },
      _StartRoam(e) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "StartRoam",
          "vi",
          [typeof e],
          [e]
        );
      },
      _SetPropertyById(e, n, t) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "SetPropertyById",
          "iiii",
          [typeof e, typeof n, typeof t],
          [e, n, t]
        );
      },
      _GetObjectByName(e) {
        return window.unitygameinstance.Module.DynCallCSFunc(
          "GetObjectByName",
          "ii",
          [typeof e],
          [e]
        );
      },
      _GetObjectByLayer(e) {
        return window.unitygameinstance.Module.DynCallCSFunc(
          "GetObjectByLayer",
          "ii",
          [typeof e],
          [e]
        );
      },
      _GetObjectByType(e) {
        let n = window.unitygameinstance.Module.DynCallCSFunc(
          "GetObjectByType",
          "ii",
          [typeof e],
          [e]
        );
        return new Array(JSON.parse(JSON.stringify(n)));
      },
      _GetObjectChilds(e) {
        let n = window.unitygameinstance.Module.DynCallCSFunc(
          "GetObjectChilds",
          "ii",
          [typeof e],
          [e]
        );
        return (
          console.log(JSON.parse(JSON.stringify(n))),
          JSON.parse(JSON.stringify(n))
        );
      },
      _AddObject(e, n, t, o, a) {
        if (e && n && t && o && a) alert("参数确少");
        else {
          var l = { x: t.x, y: t.y, z: t.z },
            s = { x: o.x, y: o.y, z: o.z },
            r = { x: a.x, y: a.y, z: a.z },
            u = { type: e, Id: n, position: l, eulerAngle: s, localScale: r };
          window.unitygameinstance.Module.DynCallCSFunc(
            "AddObject",
            "vi",
            [typeof u],
            [JSON.stringify(u)]
          );
        }
      },
      _CloneObject(e, n, t) {
        let o = window.unitygameinstance.Module.DynCallCSFunc(
          "CloneObject",
          "iiii",
          [typeof e, typeof n, typeof t],
          [e, n, t]
        );
        return Number(o);
      },
      _DoMove(e, n, t) {
        var o = { x: n.x, y: n.y, z: n.z };
        window.unitygameinstance.Module.DynCallCSFunc(
          "DoMove",
          "iiif",
          [typeof e, typeof JSON.stringify(o), typeof t],
          [e, JSON.stringify(o), t]
        );
      },
      _DoLocalMove(e, n, t) {
        var o = { x: n.x, y: n.y, z: n.z };
        window.unitygameinstance.Module.DynCallCSFunc(
          "DoLocalMove",
          "iiif",
          [typeof e, typeof JSON.stringify(o), typeof t],
          [e, JSON.stringify(o), t]
        );
      },
      _DoRotate(e, n, t) {
        var o = { x: n.x, y: n.y, z: n.z };
        window.unitygameinstance.Module.DynCallCSFunc(
          "DoRotate",
          "iiif",
          [typeof e, typeof JSON.stringify(o), typeof t],
          [e, JSON.stringify(o), t]
        );
      },
      _DoLocalRotate(e, n, t) {
        var o = { x: n.x, y: n.y, z: n.z };
        window.unitygameinstance.Module.DynCallCSFunc(
          "DoLocalRotate",
          "iiif",
          [typeof e, typeof JSON.stringify(o), typeof t],
          [e, JSON.stringify(o), t]
        );
      },
      _DoLocalScale(e, n, t) {
        var o = { x: n.x, y: n.y, z: n.z };
        window.unitygameinstance.Module.DynCallCSFunc(
          "DoLocalScale",
          "iiif",
          [typeof e, typeof JSON.stringify(o), typeof t],
          [e, JSON.stringify(o), t]
        );
      },
      _GetMainCameraId() {
        let e = window.unitygameinstance.Module.DynCallCSFunc(
          "GetMainCameraId",
          "i",
          [],
          []
        );
        return JSON.parse(JSON.stringify(e));
      },
      _GetCullingMask(e) {
        let n = window.unitygameinstance.Module.DynCallCSFunc(
          "GetCullingMask",
          "ii",
          [typeof e],
          [e]
        );
        return JSON.parse(JSON.stringify(n));
      },
      _SetCullingMask(e, n) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "SetCullingMask",
          "iii",
          [typeof e, typeof JSON.stringify(n)],
          [e, JSON.stringify(n)]
        );
      },
      _AddCullingMask(e, n) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "AddCullingMask",
          "iii",
          [typeof e, typeof n],
          [e, n]
        );
      },
      _RemoveCullingMask(e, n) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "RemoveCullingMask",
          "iii",
          [typeof e, typeof n],
          [e, n]
        );
      },
      _FocusObject(e, n) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "FocusObject",
          "iii",
          [typeof e, typeof n],
          [e, n]
        );
      },
      _FocusObjectOffset(e, n, t, o) {
        let a = { x: t.x, y: t.y, z: t.z },
          l = null;
        o != null && (l = { x: o.x, y: o.y, z: o.z }),
          window.unitygameinstance.Module.DynCallCSFunc(
            "FocusObjectOffset",
            "iiiii",
            [typeof e, typeof n, typeof a, typeof l],
            [e, n, a, l]
          );
      },
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
      _LoadGlbAsync(e, n, t, o, a) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "LoadGlbAsyncCS",
          "viiiii",
          [typeof e, typeof n, typeof t, typeof o, typeof a],
          [e, n, t, o, a]
        );
      },
      _GameObjSetActive(e, n, t) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "GameObjectSetActiveCS",
          "viii",
          [typeof e, typeof n, typeof t],
          [e, n, t]
        );
      },
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
      GetIndexedDBURL(e, n) {
        var t = this.GetValue,
          o = e.toUpperCase();
        let a = [];
        return new Promise((l, s) => {
          var r = window.indexedDB,
            u = r.open(e, 1);
          (u.onerror = function (d) {
            console.log("IndexedDB error: " + d.target.errorCode), s("error");
          }),
            (u.onsuccess = async function (d) {
              var y = u.result,
                f = y.transaction([o], "readwrite");
              if (Array.isArray(n) == !0)
                n.forEach(async (w, g) => {
                  let D = await t(f, o, w);
                  var S = window.URL || window.webkitURL,
                    b = S.createObjectURL(new Blob([D]));
                  a.push({ name: w, bloburl: b }), g == n.length - 1 && l(a);
                });
              else {
                let w = await t(f, o, n);
                var C = window.URL || window.webkitURL,
                  m = C.createObjectURL(new Blob([w]));
                a.push({ name: n, bloburl: m }), l(a);
              }
            });
        });
      },
      GetValue(e, n, t) {
        if (t == null || t == null || t == "") resolve(null);
        else
          return (
            console.log(t),
            new Promise((o, a) => {
              let s = e.objectStore(n).get(t);
              (s.onerror = function (r) {
                console.log("事务失败"), a(r);
              }),
                (s.onsuccess = function (r) {
                  o(s.result);
                });
            })
          );
      },
      DownloadResource(e) {
        try {
          return new Promise((n, t) => {
            const o = new XMLHttpRequest();
            (o.timeout = 6e4),
              o.open("GET", e),
              (o.responseType = "blob"),
              (o.onload = () => {
                if (o.status === 200) {
                  var a = new Uint8Array(o.response);
                  let l = new FileReader();
                  l.readAsDataURL(o.response),
                    (l.onload = function (s) {
                      p = l.result.split(",")[1];
                      const r = atob(p);
                      var u = new Uint8Array(r.length);
                      for (let d = 0; d < r.length; d++) u[d] = r.charCodeAt(d);
                      n(u);
                    });
                } else n(null), t(o.statusText);
              }),
              (o.ontimeout = () => {
                t("timeout");
              }),
              (o.onerror = () => {
                console.log("eeeeeeeeeeeeeeeee"), t("error");
              }),
              o.send(() => {
                console.log("send error");
              });
          });
        } catch (n) {
          console.log(n + "DownloadResource");
        }
      },
      CheckDatabaseExists(e) {
        return new Promise(function (n, t) {
          var o = window.indexedDB;
          o.databases().then((a) => {
            e.forEach((l) => {
              typeof a.find((s) => s.name === l.dbName) > "u"
                ? ((l.isExist = !1),
                  l.keys.forEach((s) => {
                    s.isDownloaded = !1;
                  }),
                  console.log(l))
                : (l.isExist = !0),
                console.log("checkdatabase", l);
            }),
              n(e);
          });
        });
      },
      CheckIndexedDBValue(e) {
        var n = e.dbName,
          t = e.dbName.toUpperCase();
        return new Promise((o, a) => {
          if (e.isExist == !0) {
            var l = window.indexedDB,
              s = l.open(n, 1);
            (s.onerror = function (r) {
              console.log("IndexedDB error: " + r.target.errorCode), a("error");
            }),
              (s.onsuccess = async function (r) {
                var u = s.result,
                  d = u.transaction([t], "readonly");
                await e.keys.forEach((y) => {
                  d.objectStore(t).get(y.name).onsuccess = function (f) {
                    typeof f.target.result == "object"
                      ? (y.isDownloaded = !0)
                      : (y.isDownloaded = !1);
                  };
                }),
                  (d.oncomplete = function () {
                    console.log("check database value", e.keys), o(e.keys);
                  });
              });
          } else console.log("check database value", e.keys), o(e.keys);
        });
      },
      Download(e, n) {
        e.forEach(async (t, o) => {
          await window.unitygameinstance.Module.DynCallCSFunc(
            "AddurlDic_H5",
            "vii",
            [typeof t.name, typeof t.bloburl],
            [t.name, t.bloburl]
          ),
            o == e.length - 1 &&
              (console.log("AddurlDic_H5 Done"), this.getTem(n));
        });
      },
      _getModelurl(e) {
        return new Promise(function (n, t) {
          var o = null;
          window.XMLHttpRequest
            ? (o = new XMLHttpRequest())
            : window.ActiveXObject &&
              (o = new ActiveXObject("Microsoft.XMLHTTP")),
            o.open("get", e),
            (o.onreadystatechange = function () {
              o.readyState == 4 &&
                o.status == 200 &&
                (callback(o.responseText), this._InitModel(o.responseText));
            }),
            n(o.responseText);
        });
      },
      dbInfos: [],
      obj: null,
      callbacks: [],
      async InitSingleModel(e, n) {
        (this.dbInfos = []),
          (this.obj = null),
          (c.loadcallback = n),
          (this.obj = JSON.parse(e));
        var t = this.obj.fileInfo.id;
        if (
          (this.modelInfoDict.get(t) == null
            ? this.modelInfoDict.set(t, {
                AccessCount: 1,
                LastAccessTime: new Date(),
                isInstantiating: !1,
                heapSizeEstimate: (this.obj.fileInfo.size / 1024 / 1024) * 8,
                uuidDict: new Map(),
              })
            : (this.modelInfoDict.get(t).AccessCount++,
              (this.modelInfoDict.get(t).LastAccessTime = new Date())),
          this.modelInfoDict.forEach((r, u) => {
            console.log(u, r),
              u != t &&
                r.isInstantiated == !0 &&
                r.uuidDict.forEach((d) => {
                  d.instanceID.forEach((y) => {
                    this._SetPropertyById(Number(y), "visible", "false");
                  });
                });
          }),
          this.modelInfoDict.get(t).isInstantiated == !0)
        )
          console.log(this.modelInfoDict.get(t).uuidDict),
            this.modelInfoDict.get(t).uuidDict.forEach((r) => {
              r.instanceID.forEach((u) => {
                this._SetPropertyById(Number(u), "visible", "true");
              });
            }),
            console.log("InitQueue", this.InitQueue),
            this.InitQueue.activeQueue.shift(),
            console.log("SetActive True");
        else {
          var o = setInterval(() => {
              console.log("loading"),
                window.unitygameinstance != null &&
                  (console.log("loaded"), clearInterval(o));
            }, 1e3),
            a;
          if (
            (window.unitygameinstance == null
              ? (a = 4096)
              : (a =
                  window.performance.memory.jsHeapSizeLimit / 1024 / 1024 -
                  window.unitygameinstance.GetMemoryInfo().totalWASMHeapSize /
                    1024 /
                    1024),
            console.log("availableHeapSize", a),
            this.modelInfoDict.get(t).heapSizeEstimate < a)
          )
            console.log("New Add File"), this.Download();
          else {
            console.log("New Add File By Destroy");
            var l = [];
            modelInfoDict.forEach((r, u) => {
              l.push({
                id: u,
                AccessCount: r.AccessCount,
                LastAccessTime: r.LastAccessTime,
                Size: r.heapSizeEstimate,
              });
            }),
              (l = sortByAccessAndTime(l));
            var s = 0;
            l.forEach((r) => {
              s < this.obj.fileInfo.size &&
                ((s += r.Size), (modelInfoDict.get(r.id).isNeedDestroy = !0));
            }),
              modelInfoDict.forEach((r) => {
                r.isNeedDestroy == !0 &&
                  r.modelDict.forEach((u) => {
                    u.isInstantiated == !0 &&
                      u.instanceID.forEach((d) => {
                        this._DestroyObject(d);
                      });
                  });
              }),
              this.Download();
          }
        }
      },
      CheckDataBase(e, n) {
        return new Promise(function (t, o) {
          var a = window.indexedDB,
            a = window.indexedDB;
          a.databases().then((l) => {
            l.find((s) => s.name == e) != null ? t(!0) : t(!1);
          });
        });
      },
      CheckDataBaseValueList(e, n, t) {
        return new Promise((o, a) => {
          var l = window.indexedDB,
            s = l.open(n, 1);
          (s.onerror = function (r) {
            a("error");
          }),
            (s.onsuccess = async function (r) {
              var u = s.result,
                d = u.transaction([t], "readonly");
              await e.forEach((y) => {
                d.objectStore(t).get(y.modelID).onsuccess = function (f) {
                  if (typeof f.target.result == "object") {
                    y.isDownloaded = !0;
                    var C = window.URL || window.webkitURL,
                      m = C.createObjectURL(new Blob([f.target.result]));
                    (y.blobUrl = m), (y.url = void 0);
                  } else y.isDownloaded = !1;
                };
              }),
                (d.oncomplete = function () {
                  o("success");
                });
            }),
            (s.onupgradeneeded = function (r) {
              r.target.result.createObjectStore(TableName, {}),
                console.log("onupgradeneeded");
            });
        });
      },
      CheckDataBaseValueTexture(e) {
        var n = "texture",
          t = "TEXTURE";
        return new Promise((o, a) => {
          var l = window.indexedDB,
            s = l.open(n, 1);
          (s.onerror = function (r) {
            a("error");
          }),
            (s.onsuccess = async function (r) {
              var u = s.result,
                d = u.transaction([t], "readonly");
              (d.objectStore(t).get(e.key).onsuccess = function (y) {
                if (typeof y.target.result == "object") {
                  e.isDownloaded = !0;
                  var f = window.URL || window.webkitURL,
                    C = f.createObjectURL(new Blob([y.target.result]));
                  e.blobUrl = C;
                } else e.isDownloaded = !1;
              }),
                (d.oncomplete = function () {
                  o("success");
                });
            }),
            (s.onupgradeneeded = function (r) {
              r.target.result.createObjectStore(t, {}),
                console.log("onupgradeneeded");
            });
        });
      },
      async startDownload(e, n) {
        c.loadcallback = n;
        const t = JSON.parse(e),
          o = t.models,
          a = t.fileInfo,
          l = t.texturezip,
          s = 1e3;
        this.notiSheets.set(a.id, {
          fileCount: o.length,
          notiCount: 0,
          notiFileCount: 0,
          downloadCount: 0,
          notiFiles: [],
        });
        const r = { id: a.id, notiSheetsContext: this.notiSheets };
        var u = !1;
        l.key = a.id + l.name;
        var d = await this.CheckDataBase("texture", "TEXTURE");
        if (
          (d
            ? (await this.CheckDataBaseValueTexture(l),
              l.isDownloaded == !1 && (u = !0))
            : (u = !0),
          u)
        ) {
          const w = await this.downloadFile(l.url);
          l.blobUrl = await this.SetAndGetIndexedDB("texture", "TEXTURE", l.key, w, !1);
          var y = setInterval(() => {
            var g;
            ((g = window.unitygameinstance) == null
              ? void 0
              : g.Module.LoadPicture) != null &&
              (clearInterval(y),
              console.log("loaded texture", l),
              this.LoadPictureU3D(l.blobUrl));
          }, 10);
        } else
          var y = setInterval(() => {
            var g;
            ((g = window.unitygameinstance) == null
              ? void 0
              : g.Module.LoadPicture) != null &&
              (console.log("loaded texture", l),
              clearInterval(y),
              this.LoadPictureU3D(l.blobUrl));
          }, 10);
        var f = !1,
          C = await this.CheckDataBase(a.id);
        if (
          (C
            ? (await this.CheckDataBaseValueList(t.models, a.id, "DATA"),
              t.models.find((w) => w.isDownloaded == !1) != null && (f = !0))
            : (f = !0),
          f)
        )
          console.log("Flow Type"),
            this.NotiUnity(r),
            this.downloadFilesConcurrently(o, s, r)
              .then(() => {
                console.log("All files have been downloaded.");
              })
              .catch((w) => {
                console.error("Error during downloads:", w);
              });
        else {
          console.log("Cache Type", t);
          var m = setInterval(() => {
            var w, g, D, S;
            if (
              ((w = window.unitygameinstance) == null
                ? void 0
                : w.Module.LoadMessage) == null ||
              ((g = window.unitygameinstance) == null
                ? void 0
                : g.Module.ChangeLoadCount) == null
            ) {
              console.log(
                "Waiting for Unity",
                (D = window.unitygameinstance) == null
                  ? void 0
                  : D.Module.LoadMessage,
                (S = window.unitygameinstance) == null
                  ? void 0
                  : S.Module.ChangeLoadCount
              );
              return;
            }
            clearInterval(m),
              this.ChangeLoadCount(),
              this.LoadALLModels(JSON.stringify(t));
          }, 1e3);
        }
      },
      notiSheets: new Map(),
      async downloadFilesConcurrently(e, n, t) {
        let o = 0,
          a = 0,
          l = [];
        var s = this.downloadFile,
          r = this.SetAndGetIndexedDB,
          u = this.notifyUser;
        async function d() {
          if (o >= e.length) return;
          const f = o++,
            C = e[f],
            m = e[f].url;
          try {
            const w = await s(m),
              g = await r(t.id, "DATA", C.modelID, w, !1);
            (C.blobUrl = g),
              console.log("obj blob url:", w.modelID, g),
              l.push(C),
              a++,
              a % 100 === 0 && (u(`Downloaded ${a} files`, l, t), (l = []));
          } catch (w) {
            console.error(`Error downloading ${m}:`, w);
          }
          await d();
        }
        const y = Array(Math.min(n, e.length)).fill(null).map(d);
        await Promise.all(y),
          l.length > 0 && this.notifyUser(`Downloaded ${a} files`, l, t);
      },
      NotiUnity(e) {
        var n = e.notiSheetsContext.get(e.id),
          t = void 0,
          o = setInterval(() => {
            var s, r;
            if (
              ((s = window.unitygameinstance) == null
                ? void 0
                : s.Module.AddLoadQueue) == null
            ) {
              console.log(
                "Waiting for Unity",
                (r = window.unitygameinstance) == null
                  ? void 0
                  : r.Module.AddLoadQueue
              );
              return;
            }
            if (
              (console.log("NotiUnity ing"),
              console.log("notiSheet:", n),
              (t = n.notiFiles.find((u) => u.isNoti == !1)),
              console.log("nitiContent:", t),
              t != null)
            ) {
              (t.isNoti = !0),
                n.notiCount++,
                (n.notiFileCount += t.files.length);
              var a =
                  n.notiCount === 1
                    ? 0
                    : n.notiFileCount === n.fileCount
                    ? 2
                    : n.notiCount > 1 && n.notiFileCount !== n.fileCount
                    ? 1
                    : void 0,
                l = { models: t.files, status: a, maxcount: 500 };
              console.log("Send Unity", n.notiCount, n.notiFileCount, l),
                a == 0 && this.InitCamPos(),
                this.AddLoadQueue(JSON.stringify(l));
            }
            n.notiFileCount == n.fileCount &&
              (clearInterval(o), console.log("NotiUnity end"));
          }, 1e3);
      },
      notifyUser(e, n, t) {
        var o = t.notiSheetsContext.get(t.id);
        console.log("Files:", n, t, o),
          console.log("notiSheet", o, o == null ? void 0 : o.notiFiles),
          o.notiFiles.push({ isNoti: !1, files: n }),
          (o.downloadCount += n.length),
          console.log("notiSheets", o);
      },
      downloadFile(e) {
        try {
          return new Promise((n, t) => {
            const o = new XMLHttpRequest();
            (o.timeout = 6e4),
              o.open("GET", e),
              (o.responseType = "blob"),
              (o.onload = () => {
                if (o.status === 200) {
                  var a = new Uint8Array(o.response);
                  let l = new FileReader();
                  l.readAsDataURL(o.response),
                    (l.onload = function (s) {
                      p = l.result.split(",")[1];
                      const r = atob(p);
                      var u = new Uint8Array(r.length);
                      for (let d = 0; d < r.length; d++) u[d] = r.charCodeAt(d);
                      n(u);
                    });
                } else n(null), t(o.statusText);
              }),
              (o.ontimeout = () => {
                t("timeout");
              }),
              (o.onerror = () => {
                t("error");
              }),
              o.send(() => {
                console.log("send error");
              });
          });
        } catch (n) {
          console.log(n + "DownloadResource");
        }
      },
      sortByAccessAndTime(e) {
        return e.sort((n, t) => {
          const o = n.AccessCount - t.AccessCount;
          return o === 0
            ? n.LastAccessTime.getTime() - t.LastAccessTime.getTime()
            : o;
        });
      },
      async Download() {
        var e = [];
        this.obj.models.forEach((t) => {
          e.push({ name: t.modelID, url: t.url });
        }),
          this.dbInfos.push({
            dbName: "data",
            isExist: {},
            isAllDone: !0,
            keys: e,
          }),
          this.dbInfos.push({
            dbName: "texture",
            isExist: {},
            keys: [this.obj.texturezip],
          }),
          await this.CheckDatabaseExists(this.dbInfos),
          console.log(this.dbInfos);
        let n = this.dbInfos.map(async (t) => {
          await this.CheckIndexedDBValue(t);
        });
        await Promise.all(n),
          console.log(this.dbInfos),
          this.dbInfos[0].keys.find((t) => t.isDownloaded == !1) ||
          this.dbInfos[1].keys.find((t) => t.isDownloaded == !1)
            ? this.dbInfos.map((t) => {
                t.keys.map((o) => {
                  o.isDownloaded == !1 &&
                    this.enqueue({
                      url: o.url,
                      dbName: t.dbName,
                      name: o.name,
                    });
                });
              })
            : this.AfterDownResource();
      },
      _InitModel(e, n, t) {
        t == null && this.startDownload(e, n);
      },
      EnqueueInit(e) {
        this.InitQueue.queue.push(e),
          console.log("Push task"),
          this.StartNextInit();
      },
      StartNextInit() {
        for (
          console.log("InitQueue.queue.length", this.InitQueue.queue.length),
            console.log(
              "this.InitQueue.activeQueue.length",
              this.InitQueue.activeQueue.length
            );
          this.InitQueue.queue.length > 0 &&
          this.InitQueue.activeQueue.length < this.InitQueue.maxActive;

        ) {
          const e = this.InitQueue.queue.shift();
          this.InitTask(e);
        }
      },
      InitTask(e) {
        this.InitQueue.activeQueue.push(e),
          this.InitSingleModel(e.jsonStr, e.cb);
      },
      DownloadQueue: {
        queue: [],
        activeDownloads: [],
        maxConcurrentDownloads: 1300,
      },
      enqueue(e) {
        this.DownloadQueue.queue.push(e), this.StartNextDownloads(e);
      },
      async StartNextDownloads(e) {
        for (
          ;
          this.DownloadQueue.queue.length > 0 &&
          this.DownloadQueue.activeDownloads.length <
            this.DownloadQueue.maxConcurrentDownloads;

        ) {
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
          this.DownloadQueue.activeDownloads.shift(e),
            this.StartNextDownloads(),
            this.DownloadQueue.activeDownloads.length == 0 &&
              (console.log("All Done"), this.AfterDownResource());
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
        (e = t.keys.map(async (a) => {
          await delete a.url;
        })),
          await Promise.all(e),
          console.log(t),
          (e = this.obj.models.map((a) => {
            delete a.url;
          })),
          console.log("obj", this.obj);
        var o = setInterval(() => {
          console.log("module1.unityloadpro 0", c.unityloadpro),
            c.unityloadpro &&
              (console.log("module1.unityloadpro 1", c.unityloadpro),
              clearInterval(o),
              console.log("start call unity api "),
              this.LoadCallBack(
                n.keys[0].bloburl,
                JSON.stringify(t.keys),
                JSON.stringify(this.obj)
              ),
              (this.obj = null),
              (this.dbInfos = null));
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
        console.log("dbtexture", e),
          console.log("dbobj", n),
          console.log("json", t),
          e && this.LoadTextureZip(e, this.Msg),
          this.AddBlob2U3D(n, this.BlobCallBack),
          this.AddModelMsg2U3D(t, this.ModelMsgCallBack);
      },
      AddModelMsg2U3D(e, n) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "LoadMessage",
          "vii",
          [typeof e, typeof n],
          [e, n]
        );
      },
      ModelMsgCallBack(e) {
        console.log("LoadMessage:" + e),
          e.indexOf("已成功添加模型信息") >= 0 &&
            (window.unitygameinstance.Module.DynCallCSFunc(
              "ChangeLoadCount",
              "ii",
              ["number"],
              [500]
            ),
            window.unitygameinstance.Module.DynCallCSFunc(
              "BeginLoad",
              "vii",
              [typeof c.loadcallback, typeof c.OnLoadAdapter],
              [c.loadcallback, c.OnLoadAdapter]
            ));
      },
      OnLoadAdapter(e, n) {
        var t = c.InitQueue.activeQueue.shift();
        c.modelInfoDict.get(t.id).isInstantiated = !0;
        var o, a;
        JSON.parse(t.jsonStr).models.map((l) => {
          (o = l.modelID.replace(".ab", "")),
            (a = c._UUID2ID(o)),
            a == null
              ? console.log("id.obj is undefined", o)
              : (c.modelInfoDict
                  .get(t.id)
                  .uuidDict.set(o, { instanceID: [JSON.parse(a).id] }),
                l.copies.map((s) => {
                  (a = c._UUID2ID(s.modelID)),
                    a == null
                      ? console.log("id.obj is undefined", s.modelID)
                      : c.modelInfoDict
                          .get(t.id)
                          .uuidDict.get(o)
                          .instanceID.push(JSON.parse(a).id);
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
            this.temdic(n[t].copies[a].modelID + ".ab", n[t].modelID);
            let l = JSON.stringify({
              x: n[t].copies[a].x,
              y: n[t].copies[a].y,
              z: n[t].copies[a].z,
            });
            this.posdic(n[t].copies[a].modelID + ".ab", l);
          }
        }
        console.log("添加完成"), this.loadtestin(e.view);
      },
      temdic(e, n) {
        let t = e,
          o = n;
        window.unitygameinstance.Module.DynCallCSFunc(
          "UUid2TemId",
          "vii",
          [typeof t, typeof o],
          [t, o]
        );
      },
      posdic(e, n) {
        let t = e,
          o = n;
        window.unitygameinstance.Module.DynCallCSFunc(
          "AddPosDic",
          "vii",
          [typeof t, typeof o],
          [t, o]
        );
      },
      matdic(e, n) {
        let t = e,
          o = n;
        window.unitygameinstance.Module.DynCallCSFunc(
          "AddMatDic",
          "vii",
          [typeof t, typeof o],
          [t, o]
        );
      },
      LoadPicture(e, n) {
        let t = e,
          o = n;
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
        (c.data = t[0]),
          this.downloadall(c.data).then((o) => {
            console.log(o), this.loadtestout(e);
          });
      },
      loadtestout(e, n) {
        console.log(e, "loadtestout");
        var t = Object.entries(e);
        (c.data = t[1]),
          this.downloadall(c.data).then((o) => {
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
          ),
            window.unitygameinstance.Module.DynCallCSFunc(
              "ChangeDrawCount",
              "ii",
              ["number"],
              [1]
            ),
            a.length;
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
        var n = c.urldic[e];
        return typeof n > "u" && (n = "Error"), n;
      },
      GetIndexedDBBlobUrls(e, n) {
        var t = e.toUpperCase(),
          o = this.GetValue;
        return new Promise((a, l) => {
          var s = window.indexedDB,
            r = s.open(e, 1);
          (r.onerror = function (u) {
            l("error");
          }),
            (r.onsuccess = async function (u) {
              var d = r.result,
                y = d.transaction([t], "readwrite");
              n.forEach(async (f, C) => {
                let m = await o(y, t, f.name);
                var w = window.URL || window.webkitURL;
                (f.bloburl = w.createObjectURL(new Blob([m]))),
                  C == n.length - 1 && a(n);
              });
            });
        });
      },
      async SetAndGetIndexedDB(e, n, t, o, a) {
        if (
          (console.log("SetAndGetIndexedDB", e, t, typeof o, a),
          t == null || t == null || t == "")
        )
          resolve("success");
        else
          return new Promise((l, s) => {
            var r = e,
              u = n,
              d = window.indexedDB,
              y = d.open(r, 1);
            (y.onerror = function (f) {
              s("error");
            }),
              (y.onsuccess = function (f) {
                var m = f.target.result.transaction(u, "readwrite"),
                  w = m.objectStore(u);
                if (a) {
                  var g = w.get(t);
                  g.onsuccess = function (D) {
                    var S = window.URL || window.webkitURL,
                      b = S.createObjectURL(new Blob([D.target.result]));
                    l(b);
                  };
                } else {
                  var g = w.put(o, t);
                  (g.onsuccess = function (S) {
                    (g = w.get(t)),
                      (g.onsuccess = function (b) {
                        var h = window.URL || window.webkitURL,
                          v = h.createObjectURL(new Blob([b.target.result]));
                        l(v);
                      });
                  }),
                    (g.onerror = function (S) {
                      l("error");
                    });
                }
              }),
              (y.onupgradeneeded = function (f) {
                f.target.result.createObjectStore(u, {});
              });
          });
      },
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
      LoadALLModels(e) {
        window.unitygameinstance.Module.DynCallCSFunc(
          "LoadMessage",
          "viii",
          [typeof e, typeof c.loadcallback, typeof c.OnLoadAdapterSleep],
          [e, c.loadcallback, c.OnLoadAdapterSleep]
        );
      },
      AddLoadQueue(e) {
        console.log("AddLoadQueue to U3D", e),
          window.unitygameinstance.Module.DynCallCSFunc(
            "AddLoadQueue",
            "viii",
            [typeof e, typeof c.loadcallback, typeof c.OnLoadAdapterSleep],
            [e, c.loadcallback, c.OnLoadAdapterSleep]
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
          [typeof e, typeof n],
          [e, n]
        );
      },
    };
  const i = c;
  return {
    EnableClick(e, n) {
      return i._EnableClick(e, n);
    },
    SetSelectionInnerColor(e, n, t, o) {
      return i._SetSelectionInnerColor(e, n, t, o);
    },
    GetPropertyById(e, n) {
      return i._GetPropertyById(e, n);
    },
    GetObjectAllPropertiesById(e) {
      return i._GetObjectAllPropertiesById(e);
    },
    SetHoverLayer(e) {
      return i._SetHoverLayer(e.join(" "));
    },
    ClearHoverLayer() {
      return i._ClearHoverLayer();
    },
    EnableHover(e, n) {
      return i._EnableHover(e, n);
    },
    SetClickLayer(e) {
      return i._SetClickLayer(e.join(" "));
    },
    ClearClickLayer() {
      return i._ClearClickLayer();
    },
    EnableDrag(e, n, t) {
      return i._EnableDrag(e, n, t);
    },
    SetDragLayer(e) {
      return i._SetDragLayer(e);
    },
    ClearDragLayer() {
      return i._ClearDragLayer();
    },
    ShowSelects() {
      return i._ShowSelects();
    },
    GetShownObjs() {
      return i._GetShownObjs();
    },
    ShowObj(e) {
      return i._ShowObj(e);
    },
    ShowSelects(e) {
      return i._ShowSelects(e);
    },
    HideObj(e) {
      return i._HideObj(e);
    },
    HideAllObjs() {
      return i._HideAllObjs();
    },
    HideObj(e) {
      return i._HideObj(e);
    },
    GetHiddenObjs() {
      return i._GetHiddenObjs();
    },
    GetComponentsInfo(e) {
      return i._GetComponentsInfo(e);
    },
    EnableRectSelect(e, n) {
      return i._EnableRectSelect(e, n);
    },
    GetLayers() {
      return i._GetLayers();
    },
    ID2UUID(e) {
      return i._ID2UUID(e);
    },
    UUID2ID(e) {
      return Number(i._UUID2ID(e));
    },
    GetPlayerInfo() {
      return i._GetPlayerInfo();
    },
    EnableMove(e) {
      return i._EnableMove(e);
    },
    SetPlayerPosition(e, n, t) {
      return i._SetPlayerPosition(e, n, t);
    },
    SetPlayerEuler(e, n, t) {
      return i._SetPlayerEuler(e, n, t);
    },
    SetObjectEuler(e, n, t, o) {
      return i._SetObjectEuler(e.toString(), n, t, o);
    },
    SetObjectPosition(e, n, t, o) {
      return i._SetObjectPosition(e.toString(), n, t, o);
    },
    AddInputTextUI(e, n, t) {
      return i._AddInputTextUI(e, n, t);
    },
    AddLineUI(e, n, t) {
      return i._AddLineUI(e, n, t);
    },
    AddBoxUI(e, n, t) {
      return i._AddBoxUI(e, n, t);
    },
    AddAnnulusUI(e, n, t) {
      return i._AddAnnulusUI(e, n, t);
    },
    AddArrowUI(e, n, t) {
      return i._AddArrowUI(e, n, t);
    },
    EnableCreate3DUI(e) {
      return i._EnableCreate3DUI(e);
    },
    EnableKeyboard(e) {
      return i._EnableKeyboard(e);
    },
    EnableMultiLineTool(e, n, t) {
      return i._EnableMultiLineTool(e, n, t);
    },
    EnableAngleTool(e, n) {
      return i._EnableAngleTool(e, n);
    },
    EnableVolumeTool(e, n) {
      return i._EnableVolumeTool(e, n);
    },
    EnableMinDistanceTool(e, n) {
      return i._EnableMinDistanceTool(e, n);
    },
    EnableAreaTool(e, n, t) {
      return i._EnableAreaTool(e, n, t);
    },
    EnableLengthTool(e, n) {
      return i._EnableLengthTool(e, n);
    },
    SetLightData(e) {
      return i._SetLightData(e);
    },
    SetSkybox(e) {
      return i._SetSkybox(e);
    },
    SetVolumeData(e) {
      return i._SetVolumeData(e);
    },
    EnableAnimationRecord(e, n) {
      return i._EnableAnimationRecord(e, n);
    },
    PlayAnimation(e, n) {
      return i._PlayAnimation(e, n);
    },
    SetAnimationFrame(e) {
      return i._SetAnimationFrame(e);
    },
    RemoveAllAnnotations() {
      return i._RemoveAllAnnotations();
    },
    AddLight(e, n) {
      return i._AddLight(e, n);
    },
    RemoveAllLights() {
      return i._RemoveAllLights();
    },
    SetEnvironmentLight(e) {
      return i._SetEnvironmentLight(e);
    },
    EnableSceneEdit(e) {
      return i._EnableSceneEdit(e);
    },
    ImportSceneTempData() {
      return i._ImportSceneTempData();
    },
    CompleteAllAnnotations() {
      return i._CompleteAllAnnotations();
    },
    RemoveAllMeasureTools() {
      return i._RemoveAllMeasureTools();
    },
    HideAllMeasureTools(e) {
      return i._HideAllMeasureTools(e);
    },
    SetLODsScreenRelativeTransitionHeight(e) {
      return i._SetLODsScreenRelativeTransitionHeight(e);
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
    LookAtPos(e) {
      let n = { x: e.x, y: e.y, z: e.z };
      return i._LookAtPos(n);
    },
    ZoomIn() {
      return i._ZoomIn();
    },
    ZoomOut() {
      return i._ZoomOut();
    },
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
    LoadGlbAsync(e, n, t, o, a) {
      return i._LoadGlbAsync(e, n, t, o, a);
    },
    GameObjSetActive(e, n, t) {
      return i._GameObjSetActive(e, n, t);
    },
    LoadAndInstantiate(e, n, t) {
      return i._LoadAndInstantiate(e, n, t);
    },
    InstantiateObject(e, n, t, o) {
      return i._InstantiateObject(e, n, t, o);
    },
    UnLoadAssetBundle(e, n, t) {
      return i._UnLoadAssetBundle(e, n, t);
    },
    UnloadAllAssetBundles(e, n) {
      return i._UnloadAllAssetBundles(e, n);
    },
    DestroyObject(e, n) {
      return i._DestroyObject(e, n);
    },
    DestroyAllObject(e) {
      return i._DestroyAllObject(e);
    },
    EnableWalk(e) {
      return i._EnableWalk(e);
    },
    GetBoundsSizeByID(e) {
      return i._GetBoundsSizeByID(e.toString());
    },
    GetBoundsCenterByID(e) {
      return i._GetBoundsCenterByID(e.toString());
    },
    GetMainCanvasWH() {
      return i._GetMainCanvasWH();
    },
    UIAutoFit(e) {
      return i._UIAutoFit(e);
    },
    createElement() {
      return i._createElement();
    },
    addEleEvent() {
      return i._addEleEvent();
    },
    init() {
      return i._init();
    },
    quitUnity1() {
      return i._quitUnity();
    },
    onUnmountedunity() {
      return i._onUnmountedunity();
    },
    AddTags(e, n) {
      return i._AddTags(JSON.stringify(e), n);
    },
    RemoveTag(e) {
      return i._RemoveTag(e);
    },
    RemoveAllTags() {
      return i._RemoveAllTags();
    },
    UpdateTags(e, n) {
      return i._UpdateTags(JSON.stringify(e), n);
    },
    SetTextAlignment(e) {
      return i._SetTextAlignment(e);
    },
    SetTextFont(e) {
      return i._SetTextFont(e);
    },
    SetTextColor(e, n, t, o) {
      return i._SetTextColor(e, n, t, o);
    },
    SetTextSize(e) {
      return i._SetTextSize(e);
    },
    SetRouteWidth(e) {
      return i._SetRouteWidth(e);
    },
    SetRouteColor(e, n, t, o) {
      return i._SetRouteColor(e, n, t, o);
    },
    SetRouteMaterial(e) {
      return i._SetRouteMaterial(e);
    },
    SetRouteVisible(e) {
      return i._SetRouteVisible(e);
    },
    SetRoamSpeed(e) {
      return i._SetRoamSpeed(e);
    },
    PauseRoam(e) {
      return i._PauseRoam(e);
    },
    EndRoam() {
      return i._EndRoam();
    },
    ChangeRoamPoint(e) {
      return i._ChangeRoamPoint(e);
    },
    RoamArriveEvent(e) {
      return i._RoamArriveEvent(e);
    },
    StartRoam(e) {
      return i._StartRoam(JSON.stringify(e));
    },
    SetPropertyById(e, n, t) {
      typeof t == "boolean" && (t == !0 ? (t = "True") : (t = "False")),
        i._SetPropertyById(e, n, t);
    },
    GetObjectByName(e) {
      return i._GetObjectByName(e);
    },
    GetObjectByLayer(e) {
      return i._GetObjectByLayer(e);
    },
    GetObjectByType(e) {
      return console.log(e), i._GetObjectByType(e);
    },
    GetObjectChilds(e) {
      return i._GetObjectChilds(e);
    },
    AddObject(e, n, t, o, a) {
      var l = { x: t.x, y: t.y, z: t.z },
        s = { x: o.x, y: o.y, z: o.z },
        r = { x: a.x, y: a.y, z: a.z },
        u = { type: e, Id: n, position: l, eulerAngle: s, localScale: r };
      return i._AddObject(u);
    },
    CloneObject(e, n, t) {
      return (t = null) && (t = !0), i._CloneObject(e, n, t);
    },
    DoMove(e, n, t) {
      var o = { x: n.x, y: n.y, z: n.z };
      return i._DoMove(e, o, t);
    },
    DoLocalMove(e, n, t) {
      var o = { x: n.x, y: n.y, z: n.z };
      return i._DoLocalMove(e, o, t);
    },
    DoRotate(e, n, t) {
      var o = { x: n.x, y: n.y, z: n.z };
      return i._DoRotate(e, o, t);
    },
    DoLocalRotate(e, n, t) {
      var o = { x: n.x, y: n.y, z: n.z };
      return i._DoLocalRotate(e, o, t);
    },
    DoLocalScale(e, n, t) {
      let o = { x: n.x, y: n.y, z: n.z };
      return i._DoLocalScale(e, o, t);
    },
    GetMainCameraId() {
      let e = i._GetMainCameraId();
      return Number(e);
    },
    GetCullingMask(e) {
      return i._GetCullingMask(Number(e));
    },
    SetCullingMask(e, n) {
      return i._SetCullingMask(Number(e), [n]);
    },
    AddCullingMask(e, n) {
      return i._AddCullingMask(Number(e), n);
    },
    RemoveCullingMask(e, n) {
      return i._RemoveCullingMask(Number(e), n);
    },
    FocusObject(e, n) {
      return i._FocusObject(e, Number(n));
    },
    FocusObjectOffset(e, n, t, o) {
      let a = { x: t.x, y: t.y, z: t.z },
        l = null;
      return (
        o != null && (l = { x: o.x, y: o.y, z: o.z }),
        i._FocusObjectOffset(e, n, a, l)
      );
    },
    HighLightById(e, n, t, o) {
      let a = null;
      o.color != null &&
        (a = { r: o.color.r, g: o.color.g, b: o.color.b, a: o.color.a });
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
        _noise: o.noise,
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
    EnableMove(e) {
      return i._EnableMove(e);
    },
  };
});
