import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class CsapiService {
    constructor() { }
}
CsapiService.ɵfac = function CsapiService_Factory(t) { return new (t || CsapiService)(); };
CsapiService.ɵprov = ɵɵdefineInjectable({ token: CsapiService, factory: CsapiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CsapiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class CsapiComponent {
    constructor() { }
    ngOnInit() {
    }
}
CsapiComponent.ɵfac = function CsapiComponent_Factory(t) { return new (t || CsapiComponent)(); };
CsapiComponent.ɵcmp = ɵɵdefineComponent({ type: CsapiComponent, selectors: [["gciot-csapi"]], decls: 2, vars: 0, template: function CsapiComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " csapi works! or should ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CsapiComponent, [{
        type: Component,
        args: [{
                selector: 'gciot-csapi',
                template: `
    <p>
      csapi works! or should
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class CsapiModule {
}
CsapiModule.ɵmod = ɵɵdefineNgModule({ type: CsapiModule });
CsapiModule.ɵinj = ɵɵdefineInjector({ factory: function CsapiModule_Factory(t) { return new (t || CsapiModule)(); }, imports: [[]] });
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
