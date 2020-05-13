import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

var CsapiService = /** @class */ (function () {
    function CsapiService() {
    }
    CsapiService.ɵfac = function CsapiService_Factory(t) { return new (t || CsapiService)(); };
    CsapiService.ɵprov = ɵɵdefineInjectable({ token: CsapiService, factory: CsapiService.ɵfac, providedIn: 'root' });
    return CsapiService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CsapiService, [{
        type: Injectable,
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
    CsapiComponent.ɵcmp = ɵɵdefineComponent({ type: CsapiComponent, selectors: [["gciot-csapi"]], decls: 2, vars: 0, template: function CsapiComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1, " csapi works! or should ");
            ɵɵelementEnd();
        } }, encapsulation: 2 });
    return CsapiComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CsapiComponent, [{
        type: Component,
        args: [{
                selector: 'gciot-csapi',
                template: "\n    <p>\n      csapi works! or should\n    </p>\n  ",
                styles: []
            }]
    }], function () { return []; }, null); })();

var CsapiModule = /** @class */ (function () {
    function CsapiModule() {
    }
    CsapiModule.ɵmod = ɵɵdefineNgModule({ type: CsapiModule });
    CsapiModule.ɵinj = ɵɵdefineInjector({ factory: function CsapiModule_Factory(t) { return new (t || CsapiModule)(); }, imports: [[]] });
    return CsapiModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CsapiModule, { declarations: [CsapiComponent], exports: [CsapiComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CsapiModule, [{
        type: NgModule,
        args: [{
                declarations: [CsapiComponent],
                imports: [],
                exports: [CsapiComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of csapi
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CsapiComponent, CsapiModule, CsapiService };
//# sourceMappingURL=gci-csapi.js.map
