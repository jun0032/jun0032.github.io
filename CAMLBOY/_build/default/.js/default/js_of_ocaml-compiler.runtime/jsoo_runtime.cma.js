// Generated by js_of_ocaml
//# buildInfo:effects=false, kind=cma, use-js-string=true, version=5.9.1

//# unitInfo: Provides: Jsoo_runtime__
(function
  (globalThis){
   "use strict";
   var
    runtime = globalThis.jsoo_runtime,
    Jsoo_runtime = [0],
    Jsoo_runtime$0 = [0, Jsoo_runtime];
   runtime.caml_register_global(0, Jsoo_runtime$0, "Jsoo_runtime__");
   return;
  }
  (globalThis));

//# unitInfo: Provides: Jsoo_runtime__Runtime_version
(function(globalThis){
   "use strict";
   var
    runtime = globalThis.jsoo_runtime,
    s = "5.9.1",
    git_version = "",
    Jsoo_runtime_Runtime_version = [0, s, git_version];
   runtime.caml_register_global
    (2, Jsoo_runtime_Runtime_version, "Jsoo_runtime__Runtime_version");
   return;
  }
  (globalThis));

//# unitInfo: Provides: Jsoo_runtime
//# unitInfo: Requires: Jsoo_runtime__Runtime_version, Stdlib__Callback
(function
  (globalThis){
   "use strict";
   var runtime = globalThis.jsoo_runtime;
   function caml_call2(f, a0, a1){
    return (f.l >= 0 ? f.l : f.l = f.length) === 2
            ? f(a0, a1)
            : runtime.caml_call_gen(f, [a0, a1]);
   }
   var
    global_data = runtime.caml_get_global_data(),
    Jsoo_runtime_Runtime_version = global_data.Jsoo_runtime__Runtime_version,
    Stdlib_Callback = global_data.Stdlib__Callback,
    Js = [0],
    Config = [0],
    version = Jsoo_runtime_Runtime_version[1],
    git_version = Jsoo_runtime_Runtime_version[2],
    Sys = [0, Config, version, git_version],
    Exn = [248, "Jsoo_runtime.Error.Exn", runtime.caml_fresh_oo_id(0)];
   caml_call2(Stdlib_Callback[2], "jsError", [0, Exn, [0]]);
   function raise(exn){throw exn;}
   var
    Error =
      [0,
       raise,
       runtime.caml_exn_with_js_backtrace,
       runtime.caml_js_error_option_of_exception,
       Exn],
    For_compatibility_only = [0],
    Bigstring = [0],
    Typed_array = [0, Bigstring],
    Int64 = [0],
    Jsoo_runtime =
      [0, Js, Sys, Error, For_compatibility_only, Typed_array, Int64];
   runtime.caml_register_global(5, Jsoo_runtime, "Jsoo_runtime");
   return;
  }
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvb19ydW50aW1lLmNtYS5qcyIsInNlY3Rpb25zIjpbeyJvZmZzZXQiOnsibGluZSI6OCwiY29sdW1uIjowfSwibWFwIjp7InZlcnNpb24iOjMsImZpbGUiOiJqc29vX3J1bnRpbWUuY21hLmpzIiwibmFtZXMiOlsicnVudGltZSIsIkpzb29fcnVudGltZSJdLCJzb3VyY2VzIjpbIi9idWlsdGluL2JsYWNrYm94Lm1sIl0sIm1hcHBpbmdzIjoiSUFBQUEsVUFBQTtBQUFBLElBQUFDLGVBQUE7QUFBQSxJQUFBQSxpQkFBQSIsInNvdXJjZXNDb250ZW50IjpbIigqIGdlbmVyYXRlZCBjb2RlICopIl0sImlnbm9yZUxpc3QiOlswXX19LHsib2Zmc2V0Ijp7ImxpbmUiOjIwLCJjb2x1bW4iOjB9LCJtYXAiOnsidmVyc2lvbiI6MywiZmlsZSI6Impzb29fcnVudGltZS5jbWEuanMiLCJuYW1lcyI6WyJydW50aW1lIiwicyIsImdpdF92ZXJzaW9uIiwiSnNvb19ydW50aW1lX1J1bnRpbWVfdmVyc2lvbiJdLCJzb3VyY2VzIjpbIi9idWlsdGluL2JsYWNrYm94Lm1sIl0sIm1hcHBpbmdzIjoiSUFBQUEsVUFBQTtBQUFBLElBQUFDLElBQUE7QUFBQSxJQUFBQyxjQUFBO0FBQUEsSUFBQUMsK0JBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIoKiBnZW5lcmF0ZWQgY29kZSAqKSJdLCJpZ25vcmVMaXN0IjpbMF19fSx7Im9mZnNldCI6eyJsaW5lIjozNSwiY29sdW1uIjowfSwibWFwIjp7InZlcnNpb24iOjMsImZpbGUiOiJqc29vX3J1bnRpbWUuY21hLmpzIiwibmFtZXMiOlsicnVudGltZSIsImNhbWxfY2FsbDIiLCJmIiwiYTAiLCJhMSIsImdsb2JhbF9kYXRhIiwiSnNvb19ydW50aW1lX1J1bnRpbWVfdmVyc2lvbiIsIlN0ZGxpYl9DYWxsYmFjayIsIkpzIiwiQ29uZmlnIiwidmVyc2lvbiIsImdpdF92ZXJzaW9uIiwiU3lzIiwiRXhuIiwicmFpc2UiLCJFcnJvciIsIkZvcl9jb21wYXRpYmlsaXR5X29ubHkiLCJCaWdzdHJpbmciLCJUeXBlZF9hcnJheSIsIkludDY0IiwiSnNvb19ydW50aW1lIl0sInNvdXJjZXMiOlsiL2J1aWx0aW4vYmxhY2tib3gubWwiLCIvaG9tZS9qc2VvLy5vcGFtLzQuMTMuMS9saWIvanNfb2Zfb2NhbWwtY29tcGlsZXIvcnVudGltZS9qc29vX3J1bnRpbWUubWwiXSwibWFwcGluZ3MiOiJPQUFBQSxVQUFBO0FBQUEsWUFBQUMsV0FBQUMsR0FBQUMsSUFBQUM7QUFBQUEsSUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBQUMsY0FBQTtBQUFBLElBQUFDLCtCQUFBO0FBQUEsSUFBQUMsa0JBQUE7QUFBQSxJQUFBQyxLQUFBO0FBQUEsSUFBQUMsU0FBQTtBQUFBLElBQUFDLFVBQUE7QUFBQSxJQUFBQyxjQUFBO0FBQUEsSUFBQUMsTUFBQTtBQUFBLElBQUFDLE1BQUE7QUFBQSxHQ29LVTtBQUFBLFlBQUFDLFdEcEtWLFVBQUE7QUFBQTtBQUFBLElBQUFDO0FBQUFBLE1Dc0tvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBQUMseUJBQUE7QUFBQSxJQUFBQyxZQUFBO0FBQUEsSUFBQUMsY0FBQTtBQUFBLElBQUFDLFFBQUE7QUFBQSxJQUFBQztBQUFBQSxNQUFBO0FBQUE7QUFBQTtBQUFBLEVEdEtwRSIsInNvdXJjZXNDb250ZW50IjpbIigqIGdlbmVyYXRlZCBjb2RlICopIiwibW9kdWxlIEpzID0gc3RydWN0XG4gIHR5cGUgdFxuXG4gIHR5cGUgJ2EganNfYXJyYXkgPSB0XG5cbiAgdHlwZSAoJ2EsICdiKSBtZXRoX2NhbGxiYWNrID0gdFxuXG4gIGV4dGVybmFsIHN0cmluZyA6IHN0cmluZyAtPiB0ID0gXCJjYW1sX2pzc3RyaW5nX29mX3N0cmluZ1wiXG5cbiAgZXh0ZXJuYWwgdG9fc3RyaW5nIDogdCAtPiBzdHJpbmcgPSBcImNhbWxfc3RyaW5nX29mX2pzc3RyaW5nXCJcblxuICBleHRlcm5hbCBieXRlc3RyaW5nIDogc3RyaW5nIC0+IHQgPSBcImNhbWxfanNieXRlc19vZl9zdHJpbmdcIlxuXG4gIGV4dGVybmFsIHRvX2J5dGVzdHJpbmcgOiB0IC0+IHN0cmluZyA9IFwiY2FtbF9zdHJpbmdfb2ZfanNieXRlc1wiXG5cbiAgZXh0ZXJuYWwgYm9vbCA6IGJvb2wgLT4gdCA9IFwiY2FtbF9qc19mcm9tX2Jvb2xcIlxuXG4gIGV4dGVybmFsIHRvX2Jvb2wgOiB0IC0+IGJvb2wgPSBcImNhbWxfanNfdG9fYm9vbFwiXG5cbiAgZXh0ZXJuYWwgYXJyYXkgOiAnYSBhcnJheSAtPiB0ID0gXCJjYW1sX2pzX2Zyb21fYXJyYXlcIlxuXG4gIGV4dGVybmFsIHRvX2FycmF5IDogdCAtPiAnYSBhcnJheSA9IFwiY2FtbF9qc190b19hcnJheVwiXG5cbiAgZXh0ZXJuYWwgbnVtYmVyX29mX2Zsb2F0IDogZmxvYXQgLT4gdCA9IFwiY2FtbF9qc19mcm9tX2Zsb2F0XCJcblxuICBleHRlcm5hbCBmbG9hdF9vZl9udW1iZXIgOiB0IC0+IGZsb2F0ID0gXCJjYW1sX2pzX3RvX2Zsb2F0XCJcblxuICBleHRlcm5hbCBudW1iZXJfb2ZfaW50MzIgOiBpbnQzMiAtPiB0ID0gXCJjYW1sX2pzX2Zyb21faW50MzJcIlxuXG4gIGV4dGVybmFsIGludDMyX29mX251bWJlciA6IHQgLT4gaW50MzIgPSBcImNhbWxfanNfdG9faW50MzJcIlxuXG4gIGV4dGVybmFsIG51bWJlcl9vZl9uYXRpdmVpbnQgOiBuYXRpdmVpbnQgLT4gdCA9IFwiY2FtbF9qc19mcm9tX25hdGl2ZWludFwiXG5cbiAgZXh0ZXJuYWwgbmF0aXZlaW50X29mX251bWJlciA6IHQgLT4gbmF0aXZlaW50ID0gXCJjYW1sX2pzX3RvX25hdGl2ZWludFwiXG5cbiAgZXh0ZXJuYWwgdHlwZW9mIDogdCAtPiB0ID0gXCJjYW1sX2pzX3R5cGVvZlwiXG5cbiAgZXh0ZXJuYWwgaW5zdGFuY2VvZiA6IHQgLT4gdCAtPiBib29sID0gXCJjYW1sX2pzX2luc3RhbmNlb2ZcIlxuXG4gIGV4dGVybmFsIGRlYnVnZ2VyIDogdW5pdCAtPiB1bml0ID0gXCJkZWJ1Z2dlclwiXG5cbiAgZXh0ZXJuYWwgZ2V0IDogdCAtPiB0IC0+IHQgPSBcImNhbWxfanNfZ2V0XCJcblxuICBleHRlcm5hbCBzZXQgOiB0IC0+IHQgLT4gdCAtPiB1bml0ID0gXCJjYW1sX2pzX3NldFwiXG5cbiAgZXh0ZXJuYWwgZGVsZXRlIDogdCAtPiB0IC0+IHVuaXQgPSBcImNhbWxfanNfZGVsZXRlXCJcblxuICBleHRlcm5hbCBjYWxsIDogdCAtPiB0IC0+IHQgYXJyYXkgLT4gdCA9IFwiY2FtbF9qc19jYWxsXCJcblxuICBleHRlcm5hbCBmdW5fY2FsbCA6IHQgLT4gdCBhcnJheSAtPiB0ID0gXCJjYW1sX2pzX2Z1bl9jYWxsXCJcblxuICBleHRlcm5hbCBtZXRoX2NhbGwgOiB0IC0+IHN0cmluZyAtPiB0IGFycmF5IC0+IHQgPSBcImNhbWxfanNfbWV0aF9jYWxsXCJcblxuICBleHRlcm5hbCBuZXdfb2JqIDogdCAtPiB0IGFycmF5IC0+IHQgPSBcImNhbWxfanNfbmV3XCJcblxuICBleHRlcm5hbCBuZXdfb2JqX2FyciA6IHQgLT4gdCBqc19hcnJheSAtPiB0ID0gXCJjYW1sX29qc19uZXdfYXJyXCJcblxuICBleHRlcm5hbCBvYmogOiAoc3RyaW5nICogdCkgYXJyYXkgLT4gdCA9IFwiY2FtbF9qc19vYmplY3RcIlxuXG4gIGV4dGVybmFsIGVxdWFscyA6IHQgLT4gdCAtPiBib29sID0gXCJjYW1sX2pzX2VxdWFsc1wiXG5cbiAgZXh0ZXJuYWwgc3RyaWN0X2VxdWFscyA6IHQgLT4gdCAtPiBib29sID0gXCJjYW1sX2pzX3N0cmljdF9lcXVhbHNcIlxuXG4gIGV4dGVybmFsIHB1cmVfZXhwciA6ICh1bml0IC0+ICdhKSAtPiAnYSA9IFwiY2FtbF9qc19wdXJlX2V4cHJcIlxuXG4gIGV4dGVybmFsIGV2YWxfc3RyaW5nIDogc3RyaW5nIC0+ICdhID0gXCJjYW1sX2pzX2V2YWxfc3RyaW5nXCJcblxuICBleHRlcm5hbCBqc19leHByIDogc3RyaW5nIC0+ICdhID0gXCJjYW1sX2pzX2V4cHJcIlxuXG4gIGV4dGVybmFsIHB1cmVfanNfZXhwciA6IHN0cmluZyAtPiAnYSA9IFwiY2FtbF9wdXJlX2pzX2V4cHJcIlxuXG4gIGV4dGVybmFsIGNhbGxiYWNrIDogKCdiIC0+ICdhKSAtPiAoJ2IsICdhKSBtZXRoX2NhbGxiYWNrXG4gICAgPSBcImNhbWxfanNfd3JhcF9jYWxsYmFja191bnNhZmVcIlxuXG4gIGV4dGVybmFsIGNhbGxiYWNrX3dpdGhfYXJndW1lbnRzIDpcbiAgICAodCBqc19hcnJheSAtPiAnYikgLT4gKCdjLCB0IGpzX2FycmF5IC0+ICdiKSBtZXRoX2NhbGxiYWNrXG4gICAgPSBcImNhbWxfanNfd3JhcF9jYWxsYmFja19hcmd1bWVudHNcIlxuXG4gIGV4dGVybmFsIGNhbGxiYWNrX3dpdGhfYXJpdHkgOiBpbnQgLT4gKCdhIC0+ICdiKSAtPiAoJ2MsICdhIC0+ICdiKSBtZXRoX2NhbGxiYWNrXG4gICAgPSBcImNhbWxfanNfd3JhcF9jYWxsYmFja19zdHJpY3RcIlxuXG4gIGV4dGVybmFsIG1ldGhfY2FsbGJhY2sgOiAoJ2IgLT4gJ2EpIC0+ICgnYiwgJ2EpIG1ldGhfY2FsbGJhY2tcbiAgICA9IFwiY2FtbF9qc193cmFwX21ldGhfY2FsbGJhY2tfdW5zYWZlXCJcblxuICBleHRlcm5hbCBtZXRoX2NhbGxiYWNrX3dpdGhfYXJpdHkgOiBpbnQgLT4gKCdiIC0+ICdhKSAtPiAoJ2IsICdhKSBtZXRoX2NhbGxiYWNrXG4gICAgPSBcImNhbWxfanNfd3JhcF9tZXRoX2NhbGxiYWNrX3N0cmljdFwiXG5cbiAgZXh0ZXJuYWwgbWV0aF9jYWxsYmFja193aXRoX2FyZ3VtZW50cyA6XG4gICAgKCdiIC0+IHQganNfYXJyYXkgLT4gJ2EpIC0+ICgnYiwgdCBqc19hcnJheSAtPiAnYSkgbWV0aF9jYWxsYmFja1xuICAgID0gXCJjYW1sX2pzX3dyYXBfbWV0aF9jYWxsYmFja19hcmd1bWVudHNcIlxuXG4gIGV4dGVybmFsIHdyYXBfY2FsbGJhY2sgOiAoJ2EgLT4gJ2IpIC0+ICgnYywgJ2EgLT4gJ2IpIG1ldGhfY2FsbGJhY2tcbiAgICA9IFwiY2FtbF9qc193cmFwX2NhbGxiYWNrXCJcblxuICBleHRlcm5hbCB3cmFwX21ldGhfY2FsbGJhY2sgOiAoJ2EgLT4gJ2IpIC0+ICgnYSwgJ2IpIG1ldGhfY2FsbGJhY2tcbiAgICA9IFwiY2FtbF9qc193cmFwX21ldGhfY2FsbGJhY2tcIlxuZW5kXG5cbm1vZHVsZSBTeXMgPSBzdHJ1Y3RcbiAgdHlwZSAnYSBjYWxsYmFjayA9ICdhXG5cbiAgZXh0ZXJuYWwgY3JlYXRlX2ZpbGUgOiBuYW1lOnN0cmluZyAtPiBjb250ZW50OnN0cmluZyAtPiB1bml0ID0gXCJjYW1sX2NyZWF0ZV9maWxlXCJcblxuICBleHRlcm5hbCByZWFkX2ZpbGUgOiBuYW1lOnN0cmluZyAtPiBzdHJpbmcgPSBcImNhbWxfcmVhZF9maWxlX2NvbnRlbnRcIlxuXG4gIGV4dGVybmFsIHNldF9jaGFubmVsX291dHB1dCcgOiBvdXRfY2hhbm5lbCAtPiAoanNfc3RyaW5nOkpzLnQgLT4gdW5pdCkgY2FsbGJhY2sgLT4gdW5pdFxuICAgID0gXCJjYW1sX21sX3NldF9jaGFubmVsX291dHB1dFwiXG5cbiAgZXh0ZXJuYWwgc2V0X2NoYW5uZWxfaW5wdXQnIDogaW5fY2hhbm5lbCAtPiAodW5pdCAtPiBzdHJpbmcpIGNhbGxiYWNrIC0+IHVuaXRcbiAgICA9IFwiY2FtbF9tbF9zZXRfY2hhbm5lbF9yZWZpbGxcIlxuXG4gIGV4dGVybmFsIG1vdW50X3BvaW50IDogdW5pdCAtPiBzdHJpbmcgbGlzdCA9IFwiY2FtbF9saXN0X21vdW50X3BvaW50XCJcblxuICBleHRlcm5hbCBtb3VudF9hdXRvbG9hZCA6IHN0cmluZyAtPiAoc3RyaW5nIC0+IHN0cmluZyAtPiBzdHJpbmcgb3B0aW9uKSBjYWxsYmFjayAtPiB1bml0XG4gICAgPSBcImNhbWxfbW91bnRfYXV0b2xvYWRcIlxuXG4gIGV4dGVybmFsIHVubW91bnQgOiBzdHJpbmcgLT4gdW5pdCA9IFwiY2FtbF91bm1vdW50XCJcblxuICB0eXBlIHJlZGlyZWN0aW9uXG5cbiAgZXh0ZXJuYWwgcmVkaXJlY3RfY2hhbm5lbCA6IG91dF9jaGFubmVsIC0+IGludG86b3V0X2NoYW5uZWwgLT4gcmVkaXJlY3Rpb25cbiAgICA9IFwiY2FtbF9tbF9jaGFubmVsX3JlZGlyZWN0XCJcblxuICBleHRlcm5hbCByZXN0b3JlX2NoYW5uZWwgOiBvdXRfY2hhbm5lbCAtPiByZWRpcmVjdGlvbiAtPiB1bml0XG4gICAgPSBcImNhbWxfbWxfY2hhbm5lbF9yZXN0b3JlXCJcblxuICBtb2R1bGUgQ29uZmlnID0gc3RydWN0XG4gICAgZXh0ZXJuYWwgdXNlX2pzX3N0cmluZyA6IHVuaXQgLT4gYm9vbCA9IFwiY2FtbF9qc29vX2ZsYWdzX3VzZV9qc19zdHJpbmdcIlxuXG4gICAgZXh0ZXJuYWwgZWZmZWN0cyA6IHVuaXQgLT4gYm9vbCA9IFwiY2FtbF9qc29vX2ZsYWdzX2VmZmVjdHNcIlxuICBlbmRcblxuICBsZXQgdmVyc2lvbiA9IFJ1bnRpbWVfdmVyc2lvbi5zXG5cbiAgbGV0IGdpdF92ZXJzaW9uID0gUnVudGltZV92ZXJzaW9uLmdpdF92ZXJzaW9uXG5lbmRcblxubW9kdWxlIEVycm9yIDogc2lnXG4gIHR5cGUgdFxuXG4gIHZhbCByYWlzZV8gOiB0IC0+ICdhXG5cbiAgdmFsIGF0dGFjaF9qc19iYWNrdHJhY2UgOiBleG4gLT4gZm9yY2U6Ym9vbCAtPiBleG5cbiAgKCoqIEF0dGFjaCBhIEphdmFzU2NyaXB0IGVycm9yIHRvIGFuIE9DYW1sIGV4Y2VwdGlvbi4gIGlmIFtmb3JjZSA9IGZhbHNlXSBhbmQgYVxuICAgIEphdmFzU2NyaXB0IGVycm9yIGlzIGFscmVhZHkgYXR0YWNoZWQsIGl0IHdpbGwgZG8gbm90aGluZy4gVGhpcyBmdW5jdGlvbiBpcyB1c2VmdWwgdG9cbiAgICBzdG9yZSBhbmQgcmV0cmlldmUgaW5mb3JtYXRpb24gYWJvdXQgSmF2YVNjcmlwdCBzdGFjayB0cmFjZXMuXG5cbiAgICBBdHRhY2hpbmcgSmF2YXNTY3JpcHQgZXJyb3JzIHdpbGwgaGFwcGVuIGF1dG9tYXRpY2FsbHkgd2hlbiBjb21waWxpbmcgd2l0aFxuICAgIFstLWVuYWJsZSB3aXRoLWpzLWVycm9yXS4gKilcblxuICB2YWwgb2ZfZXhuIDogZXhuIC0+IHQgb3B0aW9uXG4gICgqKiBFeHRyYWN0IGEgSmF2YVNjcmlwdCBlcnJvciBhdHRhY2hlZCB0byBhbiBPQ2FtbCBleGNlcHRpb24sIGlmIGFueS4gIFRoaXMgaXMgdXNlZnVsIHRvXG4gICAgICBpbnNwZWN0IGFuIGV2ZW50dWFsIHN0YWNrIHN0cmFjZSwgZXNwZWNpYWxseSB3aGVuIHNvdXJjZW1hcCBpcyBlbmFibGVkLiAqKVxuXG4gIGV4Y2VwdGlvbiBFeG4gb2YgdFxuICAoKiogVGhlIFtFcnJvcl0gZXhjZXB0aW9uIHdyYXAgamF2YXNjcmlwdCBleGNlcHRpb25zIHdoZW4gY2F1Z2h0IGJ5IE9DYW1sIGNvZGUuXG4gICAgICBJbiBjYXNlIHRoZSBqYXZhc2NyaXB0IGV4Y2VwdGlvbiBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgamF2YXNjcmlwdCBbRXJyb3JdLFxuICAgICAgaXQgd2lsbCBiZSBzZXJpYWxpemVkIGFuZCB3cmFwcGVkIGludG8gYSBbRmFpbHVyZV0gZXhjZXB0aW9uLlxuICAqKVxuZW5kID0gc3RydWN0XG4gIHR5cGUgdFxuXG4gIGV4Y2VwdGlvbiBFeG4gb2YgdFxuXG4gIGxldCBfID0gQ2FsbGJhY2sucmVnaXN0ZXJfZXhjZXB0aW9uIFwianNFcnJvclwiIChFeG4gKE9iai5tYWdpYyBbfHxdKSlcblxuICBsZXQgcmFpc2VfIDogdCAtPiAnYSA9IEpzLmpzX2V4cHIgXCIoZnVuY3Rpb24gKGV4bikgeyB0aHJvdyBleG4gfSlcIlxuXG4gIGV4dGVybmFsIG9mX2V4biA6IGV4biAtPiB0IG9wdGlvbiA9IFwiY2FtbF9qc19lcnJvcl9vcHRpb25fb2ZfZXhjZXB0aW9uXCJcblxuICBleHRlcm5hbCBhdHRhY2hfanNfYmFja3RyYWNlIDogZXhuIC0+IGZvcmNlOmJvb2wgLT4gZXhuID0gXCJjYW1sX2V4bl93aXRoX2pzX2JhY2t0cmFjZVwiXG5lbmRcblxuW0BAQG9jYW1sLndhcm5pbmcgXCItMzItNjBcIl1cblxubW9kdWxlIEZvcl9jb21wYXRpYmlsaXR5X29ubHkgPSBzdHJ1Y3RcbiAgKCogQWRkIHByaW1pdGl2ZXMgZm9yIGNvbXBhdGliaWxpdHkgcmVhc29ucy4gRXhpc3RpbmcgdXNlcnMgbWlnaHRcbiAgICAgZGVwZW5kIG9uIGl0IChlLmcuIGdlbl9qc19hcGkpLCB3ZSBkb250IHdhbnQgdGhlIG9jYW1sIGNvbXBpbGVyXG4gICAgIHRvIGNvbXBsYWluIGFib3V0IHRoZXNlcyBtaXNzaW5nIHByaW1pdGl2ZXMuICopXG5cbiAgZXh0ZXJuYWwgY2FtbF9qc19mcm9tX3N0cmluZyA6IHN0cmluZyAtPiBKcy50ID0gXCJjYW1sX2pzX2Zyb21fc3RyaW5nXCJcblxuICBleHRlcm5hbCBjYW1sX2pzX3RvX2J5dGVfc3RyaW5nIDogSnMudCAtPiBzdHJpbmcgPSBcImNhbWxfanNfdG9fYnl0ZV9zdHJpbmdcIlxuXG4gIGV4dGVybmFsIGNhbWxfanNfdG9fc3RyaW5nIDogSnMudCAtPiBzdHJpbmcgPSBcImNhbWxfanNfdG9fc3RyaW5nXCJcblxuICBleHRlcm5hbCBjYW1sX2xpc3Rfb2ZfanNfYXJyYXkgOiAnYSBKcy5qc19hcnJheSAtPiAnYSBsaXN0ID0gXCJjYW1sX2xpc3Rfb2ZfanNfYXJyYXlcIlxuXG4gIGV4dGVybmFsIGNhbWxfbGlzdF90b19qc19hcnJheSA6ICdhIGxpc3QgLT4gJ2EgSnMuanNfYXJyYXkgPSBcImNhbWxfbGlzdF90b19qc19hcnJheVwiXG5cbiAgZXh0ZXJuYWwgdmFyaWFibGUgOiBzdHJpbmcgLT4gJ2EgPSBcImNhbWxfanNfdmFyXCJcbmVuZFxuXG5tb2R1bGUgVHlwZWRfYXJyYXkgPSBzdHJ1Y3RcbiAgdHlwZSAoJ2EsICdiKSB0eXBlZEFycmF5ID0gSnMudFxuXG4gIHR5cGUgYXJyYXlCdWZmZXIgPSBKcy50XG5cbiAgdHlwZSB1aW50OEFycmF5ID0gSnMudFxuXG4gIGV4dGVybmFsIGtpbmQgOiAoJ2EsICdiKSB0eXBlZEFycmF5IC0+ICgnYSwgJ2IpIEJpZ2FycmF5LmtpbmRcbiAgICA9IFwiY2FtbF9iYV9raW5kX29mX3R5cGVkX2FycmF5XCJcblxuICBleHRlcm5hbCBmcm9tX2dlbmFycmF5IDpcbiAgICAoJ2EsICdiLCBCaWdhcnJheS5jX2xheW91dCkgQmlnYXJyYXkuR2VuYXJyYXkudCAtPiAoJ2EsICdiKSB0eXBlZEFycmF5XG4gICAgPSBcImNhbWxfYmFfdG9fdHlwZWRfYXJyYXlcIlxuXG4gIGV4dGVybmFsIHRvX2dlbmFycmF5IDpcbiAgICAoJ2EsICdiKSB0eXBlZEFycmF5IC0+ICgnYSwgJ2IsIEJpZ2FycmF5LmNfbGF5b3V0KSBCaWdhcnJheS5HZW5hcnJheS50XG4gICAgPSBcImNhbWxfYmFfZnJvbV90eXBlZF9hcnJheVwiXG5cbiAgbW9kdWxlIEJpZ3N0cmluZyA9IHN0cnVjdFxuICAgIHR5cGUgdCA9IChjaGFyLCBCaWdhcnJheS5pbnQ4X3Vuc2lnbmVkX2VsdCwgQmlnYXJyYXkuY19sYXlvdXQpIEJpZ2FycmF5LkFycmF5MS50XG5cbiAgICBleHRlcm5hbCB0b19hcnJheUJ1ZmZlciA6IHQgLT4gYXJyYXlCdWZmZXIgPSBcImJpZ3N0cmluZ190b19hcnJheV9idWZmZXJcIlxuXG4gICAgZXh0ZXJuYWwgdG9fdWludDhBcnJheSA6IHQgLT4gdWludDhBcnJheSA9IFwiYmlnc3RyaW5nX3RvX3R5cGVkX2FycmF5XCJcblxuICAgIGV4dGVybmFsIG9mX2FycmF5QnVmZmVyIDogYXJyYXlCdWZmZXIgLT4gdCA9IFwiYmlnc3RyaW5nX29mX2FycmF5X2J1ZmZlclwiXG5cbiAgICBleHRlcm5hbCBvZl91aW50OEFycmF5IDogdWludDhBcnJheSAtPiB0ID0gXCJiaWdzdHJpbmdfb2ZfdHlwZWRfYXJyYXlcIlxuICBlbmRcblxuICBleHRlcm5hbCBvZl91aW50OEFycmF5IDogdWludDhBcnJheSAtPiBzdHJpbmcgPSBcImNhbWxfc3RyaW5nX29mX2FycmF5XCJcbmVuZFxuXG5tb2R1bGUgSW50NjQgPSBzdHJ1Y3RcbiAgZXh0ZXJuYWwgY3JlYXRlX2ludDY0X2xvX21pX2hpIDogaW50IC0+IGludCAtPiBpbnQgLT4gSW50NjQudFxuICAgID0gXCJjYW1sX2ludDY0X2NyZWF0ZV9sb19taV9oaVwiXG5lbmRcbiJdLCJpZ25vcmVMaXN0IjpbMF19fV19
