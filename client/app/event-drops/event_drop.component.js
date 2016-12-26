"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var EventDropComponent = (function () {
    function EventDropComponent() {
        this.eventsMinDistance = 60;
    }
    EventDropComponent.prototype.ngAfterViewInit = function () {
        this.timelines = this.timeline.nativeElement;
        console.log(this.timelines);
        this.initTimeline(this.timelines);
    };
    EventDropComponent.prototype.updateTimelinePosition = function (string, event, timelineComponents) {
        //translate timeline to the left/right according to the position of the selected event
        var eventStyle = window.getComputedStyle(event.get(0), null), eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')), timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')), timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
        var timelineTranslate = this.getTranslateValue(timelineComponents['eventsWrapper']);
        if ((string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < -timelineTranslate)) {
            this.translateTimeline(timelineComponents, -eventLeft + timelineWidth / 2, timelineWidth - timelineTotWidth);
        }
    };
    EventDropComponent.prototype.translateTimeline = function (timelineComponents, value, totWidth) {
        var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
        value = (value > 0) ? 0 : value; //only negative translate value
        value = (!(typeof totWidth === 'undefined') && value < totWidth) ? totWidth : value; //do not translate more than timeline width
        this.setTransformValue(eventsWrapper, 'translateX', value + 'px');
        //update navigation arrows visibility
        (value == 0) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
        (value == totWidth) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
    };
    EventDropComponent.prototype.updateFilling = function (selectedEvent, filling, totWidth) {
        //change .filling-line length according to the selected event
        var eventStyle = window.getComputedStyle(selectedEvent.get(0), null), eventLeft = eventStyle.getPropertyValue("left"), eventWidth = eventStyle.getPropertyValue("width");
        eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', '')) / 2;
        var scaleValue = eventLeft / totWidth;
        this.setTransformValue(filling.get(0), 'scaleX', scaleValue);
    };
    EventDropComponent.prototype.setDatePosition = function (timelineComponents, min) {
        for (var i = 0; i < timelineComponents['timelineDates'].length; i++) {
            var distance = this.daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]), distanceNorm = Math.round(distance / timelineComponents['eventsMinLapse']) + 2;
            timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm * min + 'px');
        }
    };
    EventDropComponent.prototype.setTimelineWidth = function (timelineComponents, width) {
        var timeSpan = this.daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length - 1]), timeSpanNorm = timeSpan / timelineComponents['eventsMinLapse'], timeSpanNorm = Math.round(timeSpanNorm) + 4, totalWidth = timeSpanNorm * width;
        timelineComponents['eventsWrapper'].css('width', totalWidth + 'px');
        this.updateFilling(timelineComponents['eventsWrapper'].find('a.selected'), timelineComponents['fillingLine'], totalWidth);
        this.updateTimelinePosition('next', timelineComponents['eventsWrapper'].find('a.selected'), timelineComponents);
        return totalWidth;
    };
    EventDropComponent.prototype.updateVisibleContent = function (event, eventsContent) {
        var eventDate = event.data('date'), visibleContent = eventsContent.find('.selected'), selectedContent = eventsContent.find('[data-date="' + eventDate + '"]'), selectedContentHeight = selectedContent.height();
        if (selectedContent.index() > visibleContent.index()) {
            var classEnetering = 'selected enter-right', classLeaving = 'leave-left';
        }
        else {
            var classEnetering = 'selected enter-left', classLeaving = 'leave-right';
        }
        selectedContent.attr('class', classEnetering);
        visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
            visibleContent.removeClass('leave-right leave-left');
            selectedContent.removeClass('enter-left enter-right');
        });
        eventsContent.css('height', selectedContentHeight + 'px');
    };
    EventDropComponent.prototype.updateOlderEvents = function (event) {
        event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
    };
    EventDropComponent.prototype.getTranslateValue = function (timeline) {
        var timelineStyle = window.getComputedStyle(timeline.get(0), null), timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
            timelineStyle.getPropertyValue("-moz-transform") ||
            timelineStyle.getPropertyValue("-ms-transform") ||
            timelineStyle.getPropertyValue("-o-transform") ||
            timelineStyle.getPropertyValue("transform");
        if (timelineTranslate.indexOf('(') >= 0) {
            var timelineTranslate = timelineTranslate.split('(')[1];
            timelineTranslate = timelineTranslate.split(')')[0];
            timelineTranslate = timelineTranslate.split(',');
            var translateValue = timelineTranslate[4];
        }
        else {
            var translateValue = 0;
        }
        return Number(translateValue);
    };
    EventDropComponent.prototype.setTransformValue = function (element, property, value) {
        element.style["-webkit-transform"] = property + "(" + value + ")";
        element.style["-moz-transform"] = property + "(" + value + ")";
        element.style["-ms-transform"] = property + "(" + value + ")";
        element.style["-o-transform"] = property + "(" + value + ")";
        element.style["transform"] = property + "(" + value + ")";
    };
    //based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
    EventDropComponent.prototype.daydiff = function (first, second) {
        return Math.round((second - first));
    };
    EventDropComponent.prototype.minLapse = function (dates) {
        //determine the minimum distance among events
        var dateDistances = [];
        for (var i = 1; i < dates.length; i++) {
            var distance = this.daydiff(dates[i - 1], dates[i]);
            dateDistances.push(distance);
        }
        return Math.min.apply(null, dateDistances);
    };
    /*
        How to tell if a DOM element is visible in the current viewport?
        http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    */
    EventDropComponent.prototype.elementInViewport = function (el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;
        while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }
        return (top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset);
    };
    EventDropComponent.prototype.checkMQ = function () {
        //check if mobile or desktop device
        return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
    };
    EventDropComponent.prototype.initTimeline = function (timelines) {
        var timelineComponents = {};
        var timeline = $(timelines);
        //cache timeline components 
        timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
        timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
        timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
        timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
        timelineComponents['timelineDates'] = this.parseDate(timelineComponents['timelineEvents']);
        timelineComponents['eventsMinLapse'] = this.minLapse(timelineComponents['timelineDates']);
        timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
        timelineComponents['eventsContent'] = timeline.children('.events-content');
        //assign a left postion to the single events along the timeline
        this.setDatePosition(timelineComponents, this.eventsMinDistance);
        //assign a width to the timeline
        var timelineTotWidth = this.setTimelineWidth(timelineComponents, this.eventsMinDistance);
        //the timeline has been initialize - show it
        timeline.addClass('loaded');
        //detect click on the next arrow
        timelineComponents['timelineNavigation'].on('click', '.next', function (event) {
            event.preventDefault();
            this.updateSlide(timelineComponents, timelineTotWidth, 'next');
        });
        //detect click on the prev arrow
        timelineComponents['timelineNavigation'].on('click', '.prev', function (event) {
            event.preventDefault();
            this.updateSlide(timelineComponents, timelineTotWidth, 'prev');
        });
        //detect click on the a single event - show new event content
        timelineComponents['eventsWrapper'].on('click', 'a', function (event) {
            event.preventDefault();
            timelineComponents['timelineEvents'].removeClass('selected');
            $(this).addClass('selected');
            this.updateOlderEvents($(this));
            this.updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
            this.updateVisibleContent($(this), timelineComponents['eventsContent']);
        });
        //on swipe, show next/prev event content
        timelineComponents['eventsContent'].on('swipeleft', function () {
            var mq = this.checkMQ();
            (mq == 'mobile') && this.showNewContent(timelineComponents, timelineTotWidth, 'next');
        });
        timelineComponents['eventsContent'].on('swiperight', function () {
            var mq = this.checkMQ();
            (mq == 'mobile') && this.showNewContent(timelineComponents, timelineTotWidth, 'prev');
        });
    };
    EventDropComponent.prototype.updateSlide = function (timelineComponents, timelineTotWidth, string) {
        //retrieve translateX value of timelineComponents['eventsWrapper']
        var translateValue = this.getTranslateValue(timelineComponents['eventsWrapper']), wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
        //translate the timeline to the left('next')/right('prev') 
        (string == 'next')
            ? this.translateTimeline(timelineComponents, translateValue - wrapperWidth + this.eventsMinDistance, wrapperWidth - timelineTotWidth)
            : this.translateTimeline(timelineComponents, translateValue + wrapperWidth - this.eventsMinDistance, wrapperWidth - timelineTotWidth);
    };
    EventDropComponent.prototype.parseDate = function (events) {
        var dateArrays = [];
        events.each(function () {
            var singleDate = $(this), dateComp = singleDate.data('date').split('T');
            if (dateComp.length > 1) {
                var dayComp = dateComp[0].split('/'), timeComp = dateComp[1].split(':');
            }
            else if (dateComp[0].indexOf(':') >= 0) {
                var dayComp = ["2000", "0", "0"], timeComp = dateComp[0].split(':');
            }
            else {
                var dayComp = dateComp[0].split('/'), timeComp = ["0", "0"];
            }
            var newDate = new Date(dayComp[2], dayComp[1] - 1, dayComp[0], timeComp[0], timeComp[1]);
            dateArrays.push(newDate);
        });
        return dateArrays;
    };
    EventDropComponent.prototype.showNewContent = function (timelineComponents, timelineTotWidth, string) {
        //go from one event to the next/previous one
        var visibleContent = timelineComponents['eventsContent'].find('.selected'), newContent = (string == 'next') ? visibleContent.next() : visibleContent.prev();
        if (newContent.length > 0) {
            var selectedDate = timelineComponents['eventsWrapper'].find('.selected'), newEvent = (string == 'next') ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');
            console.log(newEvent);
            this.updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
            this.updateVisibleContent(newEvent, timelineComponents['eventsContent']);
            newEvent.addClass('selected');
            selectedDate.removeClass('selected');
            this.updateOlderEvents(newEvent);
            this.updateTimelinePosition(string, newEvent, timelineComponents);
        }
    };
    __decorate([
        core_1.ViewChild('timeline'), 
        __metadata('design:type', core_1.ElementRef)
    ], EventDropComponent.prototype, "timeline", void 0);
    EventDropComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'event-drop',
            templateUrl: './event-drops.component.html',
            styleUrls: ['./event-drop.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], EventDropComponent);
    return EventDropComponent;
}());
exports.EventDropComponent = EventDropComponent;
//# sourceMappingURL=event_drop.component.js.map