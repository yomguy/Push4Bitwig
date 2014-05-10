// Written by Michael Schmalle - teotigraphix.com
// (c) 2014
// Licensed under GPLv3 - http://www.gnu.org/licenses/gpl.html

function BaseMode ()
{
	this.id = null;
}

BaseMode.prototype.attachTo = function (push) {};
BaseMode.prototype.onActivate = function () {};
BaseMode.prototype.getId = function () { return this.id; };
BaseMode.prototype.onValueKnob = function (index, value) {};
BaseMode.prototype.onValueKnobTouch = function (index, isTouched) {};
BaseMode.prototype.onFirstRow = function (index) {};
BaseMode.prototype.onSecondRow = function (index) {};
BaseMode.prototype.updateDisplay = function () {};
