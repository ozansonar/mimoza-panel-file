/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
    // Define changes to default configuration here. For example:
    config.language = 'tr';
    // config.uiColor = '#AADC6E';
    config.entities_latin = false;
    config.protectedSource.push(/<i[^>]*><\/i>/g);
    config.allowedContent = true;
    config.skin = 'moono-dark';
    //config.contentsCss = 'font/HelveticaNeue-Bold.otf';
    //config.font_names = 'Hel Bold;' + config.font_names;
};