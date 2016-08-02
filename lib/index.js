var fs = require('fs');
var path = require('path');
var fse = require('fs-extra');

var folders = {
    base: ['_build', '_templates', '_styles'],
    build: ['css', 'fonts', 'img', 'js'],
    templates: ['components', 'components/home', 'config', 'config/data', 'mixins', 'modules', 'posts'],
    styles: ['base', 'components', 'layouts', 'layouts/home', 'vendor']
};

var rootFile = ['.gitattributes', '.gitignore', 'gulpfile.js', 'package.json'];

var templatesFile = {
    file: ['root', 'components', 'mixins', 'modules'],
    root: ['config.yml', 'index.jade'],
    components: ['_header', '_footer', 'home/_home'],
    mixins: ['_mixins', '_svg'],
    modules: ['_fav', '_scripts', '_styles']
};

var stylesFile = {
    root: ['_config', 'main'],
    base: ['_base', '_colors', '_default', '_fonts', '_mixins', '_reset', '_states', '_typography', '_vars'],
    components: ['_breakpoint', '_buttons', '_components', '_flexbox', '_forms', '_headings', '_images', '_input', '_links', '_lists', '_paragraphs', '_tables'],
    layouts: ['_layouts', '_header', '_footer', 'home/_home'],
    vendor: ['_overrides']
};

var extTemplate = '.jade';
var extStyle = '.' + process.argv[2];

function fixMd() {
    var dir = __dirname + '\\data\\';
    var md = fs.readFileSync(dir + 'fix-md.txt', 'utf8');
    fs.writeFile(process.cwd() + '/node_modules/gulp-markdown-to-json/index.js', md);
}

function createFolder() {
    var i;
    var dir = process.cwd();
    // make folders
    for (i = 0; i < folders.base.length; i++) {
        if (!fs.existsSync(dir + '/' + folders.base[i]))
            fs.mkdir(dir + '/' + folders.base[i]);
    }
    // make build
    for (i = 0; i < folders.build.length; i++) {
        if (!fs.existsSync(dir + '/' + folders.base[0] + '/' + folders.build[i]))
            fs.mkdir(dir + '/' + folders.base[0] + '/' + folders.build[i]);
    }
    // make templates
    for (i = 0; i < folders.templates.length; i++) {
        if (!fs.existsSync(dir + '/' + folders.base[1] + '/' + folders.templates[i]))
            fs.mkdir(dir + '/' + folders.base[1] + '/' + folders.templates[i]);
    }
    // make styles
    for (i = 0; i < folders.styles.length; i++) {
        if (!fs.existsSync(dir + '/' + folders.base[2] + '/' + folders.styles[i]))
            fs.mkdir(dir + '/' + folders.base[2] + '/' + folders.styles[i]);
    }
}

function createRootFile() {
    var dir = process.cwd();
    for (var i = 0; i < rootFile.length; i++) {
        if (!fs.existsSync(dir + '/' + rootFile[i]))
            fs.closeSync(fs.openSync(dir + '/' + rootFile[i], 'w'));
    }
}

function createTemplatesFile(ext) {
    var i;
    var dir = process.cwd() + '\\_templates\\';
    // // make build
    for (i = 0; i < templatesFile.root.length; i++) {
        if (!fs.existsSync(dir + templatesFile.root[i]))
            fs.closeSync(fs.openSync(dir + templatesFile.root[i], 'w'));
    }
    // make templates
    for (i = 0; i < templatesFile.components.length; i++) {
        if (!fs.existsSync(dir + "\\components\\" + templatesFile.components[i] + ext))
            fs.closeSync(fs.openSync(dir + "\\components\\" + templatesFile.components[i] + ext, 'w'));
    }
    // make styles
    for (i = 0; i < templatesFile.mixins.length; i++) {
        if (!fs.existsSync(dir + "\\mixins\\" + templatesFile.mixins[i] + ext))
            fs.closeSync(fs.openSync(dir + "\\mixins\\" + templatesFile.mixins[i] + ext, 'w'));
    }
    // make styles
    for (i = 0; i < templatesFile.modules.length; i++) {
        if (!fs.existsSync(dir + "\\modules\\" + templatesFile.modules[i] + ext))
            fs.closeSync(fs.openSync(dir + "\\modules\\" + templatesFile.modules[i] + ext, 'w'));
    }
    fs.closeSync(fs.openSync(dir + "\\posts\\posts.md", 'w'));
    fs.closeSync(fs.openSync(dir + "\\config\\posts.json", 'w'));
    fs.closeSync(fs.openSync(dir + "\\config\\config.json", 'w'));
}

function createStylesFile(ext) {
    var i;
    var dir = process.cwd() + '\\_styles\\';
    // // make build
    for (i = 0; i < stylesFile.root.length; i++) {
        if (!fs.existsSync(dir + stylesFile.root[i] + ext))
            fs.closeSync(fs.openSync(dir + stylesFile.root[i] + ext, 'w'));
    }
    // make templates
    for (i = 0; i < stylesFile.base.length; i++) {
        if (!fs.existsSync(dir + "\\base\\" + stylesFile.base[i] + ext))
            fs.closeSync(fs.openSync(dir + "\\base\\" + stylesFile.base[i] + ext, 'w'));
    }
    // make styles
    for (i = 0; i < stylesFile.components.length; i++) {
        if (!fs.existsSync(dir + "\\components\\" + stylesFile.components[i] + ext))
            fs.closeSync(fs.openSync(dir + "\\components\\" + stylesFile.components[i] + ext, 'w'));
    }
    // make styles
    for (i = 0; i < stylesFile.layouts.length; i++) {
        if (!fs.existsSync(dir + "\\layouts\\" + stylesFile.layouts[i] + ext))
            fs.closeSync(fs.openSync(dir + "\\layouts\\" + stylesFile.layouts[i] + ext, 'w'));
    }
    // make styles
    for (i = 0; i < stylesFile.vendor.length; i++) {
        if (!fs.existsSync(dir + "\\vendor\\" + stylesFile.vendor[i] + ext))
            fs.closeSync(fs.openSync(dir + "\\vendor\\" + stylesFile.vendor[i] + ext, 'w'));
    }
}

function writeFile() {
    var dir = __dirname + '\\data\\';
    var gita = fs.readFileSync(dir + 'gitattributes.txt', 'utf8');
    var giti = fs.readFileSync(dir + 'gitignore.txt', 'utf8');
    var gulpsass = fs.readFileSync(dir + 'gulpfilesass.txt', 'utf8');
    var gulpstylus = fs.readFileSync(dir + 'gulpfilestylus.txt', 'utf8');
    var pack = fs.readFileSync(dir + 'package.txt', 'utf8');

    var dirTD = __dirname + '\\data\\templates\\';
    var conf = fs.readFileSync(dirTD + 'config.txt', 'utf8');
    var fav = fs.readFileSync(dirTD + 'fav.txt', 'utf8');
    var index = fs.readFileSync(dirTD + 'index.txt', 'utf8');
    var script = fs.readFileSync(dirTD + 'scripts.txt', 'utf8');
    var styles = fs.readFileSync(dirTD + 'styles.txt', 'utf8');
    var data = fs.readFileSync(dirTD + 'data.txt', 'utf8');
    var posts = fs.readFileSync(dirTD + 'posts.txt', 'utf8');
    var postsjson = fs.readFileSync(dirTD + 'postsjson.txt', 'utf8');
    var configjson = fs.readFileSync(dirTD + 'configjson.txt', 'utf8');

    var dirSD = __dirname + '\\data\\styles\\';
    var base = fs.readFileSync(dirSD + 'base.txt', 'utf8');
    var components = fs.readFileSync(dirSD + 'components.txt', 'utf8');
    var layouts = fs.readFileSync(dirSD + 'layouts.txt', 'utf8');
    var main = fs.readFileSync(dirSD + 'main.txt', 'utf8');
    var reset = fs.readFileSync(dirSD + 'reset.txt', 'utf8');

    var dirR = process.cwd();
    fs.writeFile(dirR + '/.gitattributes', gita);
    fs.writeFile(dirR + '/.gitignore', giti);
    if (process.argv[2] === 'sass' || process.argv[2] === 'scss') {
        fs.writeFile(dirR + '/gulpfile.js', gulpsass);
    } else if (process.argv[2] === 'styl' || process.argv[2] === 'stylus') {
        fs.writeFile(dirR + '/gulpfile.js', gulpstylus);
    }

    fs.writeFile(dirR + '/package.json', pack);

    var dirT = process.cwd() + '\\_templates\\';
    fs.writeFile(dirT + '/config.yml', conf);
    fs.writeFile(dirT + '/index.jade', index);
    fs.writeFile(dirT + '/modules/_scripts.jade', script);
    fs.writeFile(dirT + '/modules/_styles.jade', styles);
    fs.writeFile(dirT + '/modules/_fav.jade', fav);
    fs.writeFile(dirT + '/config/data/data.json', data);
    fs.writeFile(dirT + '/posts/posts.md', posts);
    fs.writeFile(dirT + '/config/posts.json', postsjson);
    fs.writeFile(dirT + '/config/config.json', configjson);

    var dirS = process.cwd() + '\\_styles\\';
    fs.writeFile(dirS + '/base/_base' + extStyle, base);
    fs.writeFile(dirS + '/components/_components' + extStyle, components);
    fs.writeFile(dirS + '/layouts/_layouts' + extStyle, layouts);
    fs.writeFile(dirS + '/main' + extStyle, main);
    fs.writeFile(dirS + '/base/_reset' + extStyle, main);
}

function copyBuild() {
    var dir = process.cwd() + '\\_build\\';
    var dirB = __dirname + '\\data\\build\\';
    fse.copy(dirB, dir);
}



module.exports = function() {
    if (process.argv[2] === 'fixmd') {
        fixMd();
    } else {
        createFolder();
        createRootFile();
        createTemplatesFile(extTemplate);
        createStylesFile(extStyle);

        writeFile();
        copyBuild();
    }
};
