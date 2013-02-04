Sample project showing how to execute unit test with JsTestDriver and Maven.

## Building project

The build depends on [Apache Maven](http://maven.apache.org/guides/getting-started/index.html).
For those familiar with `maven` it's pretty straight forward:

    mvn clean install

Build also integrates unit tests; in case the build fails b/c it cannot open a browser add `browserPath` parameter:

    mvn clean install -DbrowserPath=/path/to/my/browser

If you want to skip the tests, you can execute:

    mvn clean install -Dmaven.test.skip=true

## Links and resources

* [Maven Getting Started Guide](http://maven.apache.org/guides/getting-started/index.html)
