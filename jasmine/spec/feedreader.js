/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            try {
                expect(allFeeds.length).not.toBe(0);
            } catch(ex) {
                console.log('allFeeds is not an array.');
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        // NOTE: Task 8
        it('have URLs that are not empty', function() {
            var passed = true;
            try {
                allFeeds.forEach(function(feed) {
                    if (!feed.url) passed = false;
                });
            } catch(ex) {
                console.log('allFeeds is not an array.');
                passed = false;
            }
            expect(passed).toBe(true);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        // NOTE: Task 9
        it('have names that are not empty', function() {
            var passed = true;
            allFeeds.forEach(function(feed) {
                if (!feed.name) passed = false;
            });
            expect(passed).toBe(true);
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    // NOTE: Task 10
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
        * hidden by default. You'll have to analyze the HTML and
        * the CSS to determine how we're performing the
        * hiding/showing of the menu element.
        */
        // NOTE: Task 11
        it('has a menu hidden by default', function() {
            expect(document.getElementsByClassName('slide-menu').length).not.toBe(0);
            // EN: The first implementation of this test checks if the body has the class that triggers the transform: translate3d() for the menu.
            expect($('body').hasClass('menu-hidden')).toBe(true);
            // EN: The second implementation of this test checks the position of the menu itself.
            var menuRect = document.getElementsByClassName('slide-menu')[0].getBoundingClientRect();
            expect(menuRect.left).toBe(-1 * menuRect.width);
        });

        /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        // NOTE: Task 12
        it('has a menu that opens and closes on menu button click', function() {
            // EN: Both the body class and the menu position are checked (see comment for Task 11.)
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    // NOTE: Task 13
    var initialEntriesTest = function(feedNum) {
        describe('Initial Entries', function() {
            /* TODO: Write a test that ensures when the loadFeed
            * function is called and completes its work, there is at least
            * a single .entry element within the .feed container.
            * Remember, loadFeed() is asynchronous so this test will require
            * the use of Jasmine's beforeEach and asynchronous done() function.
            */
            // NOTE: Task 14
            beforeEach(function(done) {
                loadFeed(feedNum, function() {
                    done();
                });
            });

            it('for feed ' + feedNum + ' are loaded to the .feed container', function(done) {
                expect($('.feed > a > article.entry').length).not.toBe(0);
                done();
            });
        });
    };
    // EN: Running initial entries test for each feed. If it's not necessary, remove this loop and the wrapper function for the test and replace loadFeed(feedNum...) with loadFeed(0...).
    try {
        for (var i = 0; i < allFeeds.length; i++) {
            initialEntriesTest(i);
        }
    } catch(ex) {
        console.log('allFeeds is not an array.');
    }

    /* TODO: Write a new test suite named "New Feed Selection" */
    // NOTE: Task 15
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        * Remember, loadFeed() is asynchronous.
        */
        // NOTE: Task 16
        var contentUpdateTest = function(feedNum) {
            var prevFeed;

            beforeEach(function(done) {
                loadFeed(feedNum, function() {
                    prevFeed = $('.feed').html();
                    done();
                });
            });

            it('updates content in the .feed container', function(done) {
                loadFeed(feedNum + 1, function() {
                    var currentFeed = $('.feed').html();
                    expect(currentFeed).not.toEqual(prevFeed);
                    done();
                });
            });
        };

        try {
            for (var i = 0; i < allFeeds.length - 1; i++) {
                contentUpdateTest(i);
            }
        } catch (ex) {
            console.log('allFeeds is not an array.');
        }
    });
}());
