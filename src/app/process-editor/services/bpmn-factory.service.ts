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

import { Injectable } from '@angular/core';
import * as bpmnPropertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/bpmn';
import { BpmnFactory } from 'ama-sdk';
/*
    Angular 6 --prod mode doesn't seem to work with the normal way of importing the bpmnjs library.
    Modify this import with care, double-checking the process editor works in --prod mode.
*/
import BpmnModeler from 'bpmn-js/dist/bpmn-modeler.production.min';
import { emptyPaletteModule } from './palette/dummy-bpmn-palette.provider';
import { DecisionTableRenderModule } from './bpmn-js/renderers/decision-table.renderer';
const activitiModdleDescriptor = require('./activiti.json');

@Injectable()
export class BpmnFactoryService implements BpmnFactory {
    create(): Bpmn.Modeler {
        return new BpmnModeler({
            keyboard: { bindTo: document },
            additionalModules: [
                emptyPaletteModule,
                DecisionTableRenderModule,
                ...this.getBpmnPropertiesPanelConfig()
            ],
            moddleExtensions: { activiti: activitiModdleDescriptor }
        });
    }

    protected getBpmnPropertiesPanelConfig() {
        return [
            bpmnPropertiesProviderModule
        ];
    }
}
