{
  "version" : 2,
  "name" : "petlovelove",
  "builds" : [
      {
          "use": "@now/static-builds",
          "src": "package.json"
      }
  ],
  "routes": [
      {
          "src": "(.*).js",
          "dest": "/$1.js"
      },
      {
          "src": "(.*).json",
          "dest": "/$1.json"
      },

      {
          "src": "/.*",
          "dest": "index.html"
      }
  ]
}