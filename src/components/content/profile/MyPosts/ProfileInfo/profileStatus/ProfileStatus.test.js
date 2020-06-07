import React, { Component } from "react";
import { create } from "react-test-renderer";
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const textStatus = "my name ProfileStatus";
        const component = create(<ProfileStatus status={textStatus} />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe(textStatus);
    });
    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).toBeDefined();
    });
    test("after creation <span> should be displayed with correct status", () => {
        const textStatus = "my name ProfileStatus";
        const component = create(<ProfileStatus status={textStatus} />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe(textStatus);
    });
    test("after creation <input> should be not displayed", () => {
        const component = create(<ProfileStatus />);
        const root = component.root;
        expect(() => { let input = root.findByType("input") }).toThrow();

    });
    test("after double click <input> exists, <span> not exists", () => {
        const textStatus = "my name ProfileStatus";
        const component = create(<ProfileStatus status={textStatus} />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input).toBeDefined();
        expect(() => { span = root.findByType("span") }).toThrow();
        expect(input.props.value).toBe(textStatus);
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus updateStatusUser={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});