'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">crm-lyon documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-70bfef75e7ae58b157c546f951632661"' : 'data-target="#xs-components-links-module-AppModule-70bfef75e7ae58b157c546f951632661"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-70bfef75e7ae58b157c546f951632661"' : 'id="xs-components-links-module-AppModule-70bfef75e7ae58b157c546f951632661"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-LoginModule-43df7bf8a00297fc583f391315d28c9b"' : 'data-target="#xs-components-links-module-LoginModule-43df7bf8a00297fc583f391315d28c9b"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-LoginModule-43df7bf8a00297fc583f391315d28c9b"' : 'id="xs-components-links-module-LoginModule-43df7bf8a00297fc583f391315d28c9b"' }>
                                        <li class="link">
                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/LoginRoutingModule.html" data-type="entity-link">LoginRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/PageNotFoundModule.html" data-type="entity-link">PageNotFoundModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-PageNotFoundModule-69d6d9ae2ae9e23ae86787555228f6fd"' : 'data-target="#xs-components-links-module-PageNotFoundModule-69d6d9ae2ae9e23ae86787555228f6fd"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-69d6d9ae2ae9e23ae86787555228f6fd"' : 'id="xs-components-links-module-PageNotFoundModule-69d6d9ae2ae9e23ae86787555228f6fd"' }>
                                        <li class="link">
                                            <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link">PageNotFoundRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/PrestationModule.html" data-type="entity-link">PrestationModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-PrestationModule-0afdf0915bfea84f3789477bd6389155"' : 'data-target="#xs-components-links-module-PrestationModule-0afdf0915bfea84f3789477bd6389155"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-PrestationModule-0afdf0915bfea84f3789477bd6389155"' : 'id="xs-components-links-module-PrestationModule-0afdf0915bfea84f3789477bd6389155"' }>
                                        <li class="link">
                                            <a href="components/AddPrestationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddPrestationComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FormReactiveComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormReactiveComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ListPrestationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListPrestationsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PrestationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrestationComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/PrestationRoutingModule.html" data-type="entity-link">PrestationRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-SharedModule-818a2eacd95080abc6873b6ea26e894b"' : 'data-target="#xs-components-links-module-SharedModule-818a2eacd95080abc6873b6ea26e894b"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-SharedModule-818a2eacd95080abc6873b6ea26e894b"' : 'id="xs-components-links-module-SharedModule-818a2eacd95080abc6873b6ea26e894b"' }>
                                        <li class="link">
                                            <a href="components/TableauComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableauComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-SharedModule-818a2eacd95080abc6873b6ea26e894b"' : 'data-target="#xs-directives-links-module-SharedModule-818a2eacd95080abc6873b6ea26e894b"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-SharedModule-818a2eacd95080abc6873b6ea26e894b"' : 'id="xs-directives-links-module-SharedModule-818a2eacd95080abc6873b6ea26e894b"' }>
                                        <li class="link">
                                            <a href="directives/StateDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StateDirective</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-SharedModule-818a2eacd95080abc6873b6ea26e894b"' : 'data-target="#xs-pipes-links-module-SharedModule-818a2eacd95080abc6873b6ea26e894b"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-SharedModule-818a2eacd95080abc6873b6ea26e894b"' : 'id="xs-pipes-links-module-SharedModule-818a2eacd95080abc6873b6ea26e894b"' }>
                                        <li class="link">
                                            <a href="pipes/LocalCurrencyPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LocalCurrencyPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/TotalPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TotalPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/UiModule.html" data-type="entity-link">UiModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-UiModule-feffd2cf5dacb3214a8029595db30a14"' : 'data-target="#xs-components-links-module-UiModule-feffd2cf5dacb3214a8029595db30a14"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-UiModule-feffd2cf5dacb3214a8029595db30a14"' : 'id="xs-components-links-module-UiModule-feffd2cf5dacb3214a8029595db30a14"' }>
                                        <li class="link">
                                            <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/UiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UiComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/Prestation.html" data-type="entity-link">Prestation</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/PrestationService.html" data-type="entity-link">PrestationService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/PrestationI.html" data-type="entity-link">PrestationI</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
            <li class="chapter">
                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
            </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
