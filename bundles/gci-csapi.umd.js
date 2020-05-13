(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@gci/csapi', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.gci = global.gci || {}, global.gci.csapi = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var CsapiService = /** @class */ (function () {
        function CsapiService() {
        }
        CsapiService.ɵfac = function CsapiService_Factory(t) { return new (t || CsapiService)(); };
        CsapiService.ɵprov = core.ɵɵdefineInjectable({ token: CsapiService, factory: CsapiService.ɵfac, providedIn: 'root' });
        return CsapiService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CsapiService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var CsapiComponent = /** @class */ (function () {
        function CsapiComponent() {
        }
        CsapiComponent.prototype.ngOnInit = function () {
        };
        CsapiComponent.ɵfac = function CsapiComponent_Factory(t) { return new (t || CsapiComponent)(); };
        CsapiComponent.ɵcmp = core.ɵɵdefineComponent({ type: CsapiComponent, selectors: [["gciot-csapi"]], decls: 2, vars: 0, template: function CsapiComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p");
                core.ɵɵtext(1, " csapi works! or should at least ");
                core.ɵɵelementEnd();
            } }, encapsulation: 2 });
        return CsapiComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CsapiComponent, [{
            type: core.Component,
            args: [{
                    selector: 'gciot-csapi',
                    template: "\n    <p>\n      csapi works! or should at least\n    </p>\n  ",
                    styles: []
                }]
        }], function () { return []; }, null); })();

    var CsapiModule = /** @class */ (function () {
        function CsapiModule() {
        }
        CsapiModule.ɵmod = core.ɵɵdefineNgModule({ type: CsapiModule });
        CsapiModule.ɵinj = core.ɵɵdefineInjector({ factory: function CsapiModule_Factory(t) { return new (t || CsapiModule)(); }, imports: [[]] });
        return CsapiModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(CsapiModule, { declarations: [CsapiComponent], exports: [CsapiComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CsapiModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [CsapiComponent],
                    imports: [],
                    exports: [CsapiComponent]
                }]
        }], null, null); })();

    exports.CsapiComponent = CsapiComponent;
    exports.CsapiModule = CsapiModule;
    exports.CsapiService = CsapiService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=gci-csapi.umd.js.map
