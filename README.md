# constants-vault
NPM package used for shared constants

## Description

Node module for holding constants. Can be use to easier access 
of any values that won't change often or at all like translations.

## Usage

## Creating group
```
let vault = require('constants-vault');
vault.addGroup("name", {
    someKey: 'some value'
});
```

## Creating entry in group group
```
let vault = require('constants-vault');
vault.addToGroup(groupName, key, value);
```

## Creating group
```
let vault = require('constants-vault');
let valuesGroup = vault.getGroup(groupName);
```

## Creating group
```
let vault = require('constants-vault');
let value = vault.getGroupEntry(groupName, key);
```
