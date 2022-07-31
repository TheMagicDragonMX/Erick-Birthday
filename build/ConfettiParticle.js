"use strict";
class ConfettiParticle {
    /**
     * Creates a new ConfettiParticle object and generates
     * its DOM element, then launch() method needs to be called
     * to show the particle
     *
     * @param end Coords where the particle will arrive at
     * @param color The color of the particle
     * @param container An element that will contain the particle
     */
    constructor({ end, color, container }) {
        this.end = end;
        this.color = color;
        this.container = container;
        this.toElement();
    }
    /**
     * Creates all the div elements that generate
     * a confetti particle
     */
    toElement() {
        this.particle = createDivWithClass("confetti-particle");
        const yLaunchMovement = createDivWithClass("y-movement");
        const xLaunchMovement = createDivWithClass("x-movement");
        const launchWrapper = createDivWithClass("confetti-particle-launch-wrapper");
        const yFallingMovement = createDivWithClass("y-movement");
        const xFallingMovement = createDivWithClass("x-movement");
        const fallingWrapper = createDivWithClass("confetti-particle-falling-wrapper");
        this.wrapper = createDivWithClass("confetti-particle-wrapper");
        yLaunchMovement.appendChild(this.particle);
        xLaunchMovement.appendChild(yLaunchMovement);
        launchWrapper.appendChild(xLaunchMovement);
        yFallingMovement.appendChild(launchWrapper);
        xFallingMovement.appendChild(yFallingMovement);
        fallingWrapper.appendChild(xFallingMovement);
        this.wrapper.appendChild(fallingWrapper);
        this.wrapper.style.setProperty("--xEndPoint", this.end.x + "px");
        this.wrapper.style.setProperty("--yEndPoint", this.end.y + "px");
        this.wrapper.style.setProperty("--confettiColor", this.color);
    }
    /**
     * Takes the generated confetti particle wrapper
     * (which contains the particle itself) and adds it
     * to the DOM so it can be visualized
     */
    launch() {
        if (this.wrapper === undefined)
            return;
        this.container.appendChild(this.wrapper);
    }
    /**
     * Determines if the particle is still visible in
     * the screen
     *
     * @returns true if the particle isn't visible to
     * the viewport
     */
    isNoLongerVisible() {
        var _a;
        const particlePosition = (_a = this.particle) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        if (!particlePosition)
            return true;
        return !(particlePosition.bottom <= (window.innerHeight || document.documentElement.clientHeight));
    }
    /**
     * Removes the particle from the DOM
     */
    clear() {
        if (this.wrapper === undefined)
            return;
        this.container.removeChild(this.wrapper);
    }
}
/**
 * Creates a new div element with the given class name
 *
 * @param className Class that element will have
 * @returns The created div element
 */
function createDivWithClass(className) {
    const element = document.createElement("div");
    element.className = className;
    return element;
}
