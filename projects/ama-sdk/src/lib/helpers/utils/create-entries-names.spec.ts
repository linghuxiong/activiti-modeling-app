 /*!
 * @license
 * Copyright 2019 Alfresco, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { sanitizeString, createProcessName, formatUuid, MODEL_NAME_REGEX, CONNECTOR_NAME_REGEX, UI_NAME_REGEX, PROJECT_NAME_REGEX } from './create-entries-names';

describe('Create entries names', () => {
    it ('test sanitizeString function', () => {
        const text = 'abc!!!---01023';
        expect(sanitizeString(text)).toEqual('abc01023');
    });

    it('test createProcessName function', () => {
        const name = 'process.bpmn20.xml';
        expect(createProcessName(name)).toEqual('process');
    });

    it('test formatUid', () => {
        /* cspell: disable-next-line */
        expect(formatUuid('testType', '1234')).toEqual('testtype-1234');
    });

    it('MODEL_NAME_REGEX should not allow empty strings', () => {
        const testString = ' ';
        expect(MODEL_NAME_REGEX.test(testString)).toBe(false);
    });

    it('MODEL_NAME_REGEX should not allow special character besides _', () => {
        const testString = 'test%#$#text';
        expect(MODEL_NAME_REGEX.test(testString)).toBe(false);
    });

    it('MODEL_NAME_REGEX should allow _ ', () => {
        const testString = 'Test_123';
        expect(MODEL_NAME_REGEX.test(testString)).toBe(true);
    });

    it('CONNECTOR_NAME_REGEX should not allow any special character besides -', () => {
        const testString = 'Test_123%#$#text';
        expect(CONNECTOR_NAME_REGEX.test(testString)).toBe(false);
    });

    it('CONNECTOR_NAME_REGEX should not allow - at the end of the string', () => {
        const testString = 'test-';
        expect(CONNECTOR_NAME_REGEX.test(testString)).toBe(false);
    });

    it('CONNECTOR_NAME_REGEX should allow - inside the string', () => {
        const testString = 'test-123';
        expect(CONNECTOR_NAME_REGEX.test(testString)).toBe(true);
    });

    it('UI_NAME_REGEX should not allow any special character besides -', () => {
        const testString = 'Test_123%#$#text';
        expect(UI_NAME_REGEX.test(testString)).toBe(false);
    });

    it('UI_NAME_REGEX should not allow - at the end of the string', () => {
        const testString = 'test-';
        expect(UI_NAME_REGEX.test(testString)).toBe(false);
    });

    it('UI_NAME_REGEX should allow - inside the string', () => {
        const testString = 'test-123';
        expect(UI_NAME_REGEX.test(testString)).toBe(true);
    });

    it('PROJECT_NAME_REGEX should not allow any special character besides -', () => {
        const testString = 'Test_123%#$#text';
        expect(PROJECT_NAME_REGEX.test(testString)).toBe(false);
    });

    it('PROJECT_NAME_REGEX should not allow - at the end of the string', () => {
        const testString = 'test-';
        expect(PROJECT_NAME_REGEX.test(testString)).toBe(false);
    });

    it('PROJECT_NAME_REGEX should allow - inside the string', () => {
        const testString = 'test-123';
        expect(PROJECT_NAME_REGEX.test(testString)).toBe(true);
    });

});

