/*  
┌───────────────────────────────────────────────┐
  Copyright: Mario Kober, m@mk7.de
  Benutzung nur mit schriftlicher Erlaubnis
  
  Funktion:
  TS Loader
└───────────────────────────────────────────────┘ 
*/





### --------------------------------------
### DEPENDENCIES
### --------------------------------------
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:fluid_styled_content/Configuration/TypoScript/setup.typoscript">








### CONFIGURATION
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:mk7base/Configuration/ts_config/conf" extensions="ts">

### MENU CREATION
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:mk7base/Configuration/ts_config/nav" extensions="ts">

### HELPER FUNCTIONS
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:mk7base/Configuration/ts_config/helper" extensions="ts">

### EXT
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:mk7base/Configuration/ts_config/ext" extensions="ts">

### MAIN SETUP
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:mk7base/Configuration/ts_config/setup" extensions="ts">












##############
#### PAGE ####
##############
#page-weg = PAGE
#page-weg {
#    typeNum = 0
#    shortcutIcon = EXT:mk7base/Resources/Public/Icons/favicon.ico
#
#    10 = FLUIDTEMPLATE
#    10 {
#        # Template names will be generated automaticly by converting the applied
#        # backend_layout, there is no explicit mapping nessesary anymore.
#        #
#        # BackendLayout Key
#        # subnavigation_right_2_columns -> SubnavigationRight2Columns.html
#        #
#        # Backend Record
#        # uid: 1 -> 1.html
#        #
#        # Database Entry
#        # value: -1 -> None.html
#        # value: pagets__subnavigation_right_2_columns -> SubnavigationRight2Columns.html


#        templateName = TEXT
#        templateName {
#            cObject = TEXT
#            cObject {
#                data = pagelayout
#                required = 1
#                case = uppercamelcase
#                split {
#                    token = pagets__
#                    cObjNum = 1
#                    1.current = 1
#                }
#            }
#            ifEmpty = Default
#        }
#        templateRootPaths {
#            0 = EXT:mk7base/Resources/Private/Templates/Page/
#            1 = {$page.fluidtemplate.templateRootPath}
#        }
#        partialRootPaths {
#            0 = EXT:mk7base/Resources/Private/Partials/Page/
#            1 = {$page.fluidtemplate.partialRootPath}
#        }
#        layoutRootPaths {
#            0 = EXT:mk7base/Resources/Private/Layouts/Page/
#            1 = {$page.fluidtemplate.layoutRootPath}
#        }
#        dataProcessing {
#            10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
#            10 {
#                references.fieldName = media
#            }
#            20 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
#            20 {
#                levels = 2
#                includeSpacer = 1
#                as = mainnavigation
#            }
#        }
#    }
#
#    meta {
#        viewport = {$page.meta.viewport}
#        robots = {$page.meta.robots}
#        apple-mobile-web-app-capable = {$page.meta.apple-mobile-web-app-capable}
#        description = {$page.meta.description}
#        description {
#            override.field = description
#        }
#        author = {$page.meta.author}
#        author {
#            override.field = author
#        }
#        keywords = {$page.meta.keywords}
#        keywords {
#            override.field = keywords
#        }
#        X-UA-Compatible = {$page.meta.compatible}
#        X-UA-Compatible {
#            attribute = http-equiv
#        }
#
#        # OpenGraph Tags
#        og:title {
#            attribute = property
#            field = title
#        }
#        og:site_name {
#            attribute = property
#            data = TSFE:tmpl|setup|sitetitle
#        }
#        og:description = {$page.meta.description}
#        og:description {
#            attribute = property
#            field = description
#        }
#        og:image {
#            attribute = property
#            stdWrap.cObject = FILES
#            stdWrap.cObject {
#                references {
#                    data = levelfield:-1, media, slide
#                }
#                maxItems = 1
#                renderObj = COA
#                renderObj {
#                    10 = IMG_RESOURCE
#                    10 {
#                        file {
#                            import.data = file:current:uid
#                            treatIdAsReference = 1
#                            width = 1280c
#                            height = 720c
#                        }
#                        stdWrap {
#                            typolink {
#                                parameter.data = TSFE:lastImgResourceInfo|3
#                                returnLast = url
#                                forceAbsoluteUrl = 1
#                            }
#                        }
#                    }
#                }
#            }
#        }
#    }
#
#    includeCSSLibs {
#
#    }
#
#    includeCSS {
#        mk7base_layout = EXT:mk7base/Resources/Public/Css/main.scss
#    }
#
#    includeJSLibs {
#
#    }
#
#    includeJS {
#
#    }
#
#    includeJSFooterlibs {
#
#    }
#
#    includeJSFooter {
#        mk7base_scripts = EXT:mk7base/Resources/Public/JavaScript/Dist/scripts.js
#    }
#}







################
#### CONFIG ####
################
#config-weg {
#    absRefPrefix = auto
#    no_cache = {$config.no_cache}
#    uniqueLinkVars = 1
#    pageTitleFirst = 1
#    linkVars = L
#    prefixLocalAnchors = {$config.prefixLocalAnchors}
#    renderCharset = utf-8
#    metaCharset = utf-8
#    doctype = html5
#    removeDefaultJS = {$config.removeDefaultJS}
#    inlineStyle2TempFile = 1
#    admPanel = {$config.admPanel}
#    debug = 0
#    cache_period = 86400
#    sendCacheHeaders = {$config.sendCacheHeaders}
#    intTarget =
#    extTarget =
#    disablePrefixComment = 1
#    index_enable = 1
#    index_externals = 1
#    index_metatags = 1
#    headerComment = {$config.headerComment}
#
#    // Disable Image Upscaling
#    noScaleUp = 1
#
#    // Compression and Concatenation of CSS and JS Files
#    compressJs = 0
#    compressCss = 0
#    concatenateJs = 0
#    concatenateCss = 0
#}