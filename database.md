# notes

### file package.json
    Obligatorio name, version keys

### versions    
    emantic versioning
    "package": "MAJOR.MINOR.PATCH"
        The MAJOR version should increment when you make incompatible API changes. The MINOR version should increment when you add functionality in a backwards-compatible manner. The PATCH version should increment when you make backwards-compatible bug fixes. This means that PATCHes are bug fixes and MINORs add new features but neither of them break what worked before. Finally, MAJORs add changes that won’t work with earlier versions.
    Prefijo de tilde para auto update
    "package": "~1.3.8"
    Prefijo de caret para auto update de MINOR and PATCHes
    "package": "^1.3.8"
