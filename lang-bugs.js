// Copyright (C) 2012 Jeffrey B. Arnold
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * @fileoverview
 * Registers a language handler for BUGS and JAGS
 *
 *
 * To use, include prettify.js and this file in your HTML page.
 * Then put your code in an HTML tag like
 *      <pre class="prettyprint lang-r"> code </pre>
 *
 * Language definitions from OpenBUGS 1.4 manual
 * and JAGS 3.2 manul.
 * 
 * @author jeffrey.arnold@gmail.com
 */
PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
            [PR['PR_PLAIN'],       /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0'],
        ],
        [
	    // either # or /* comments
            [PR['PR_COMMENT'],     /^(?:#[^\r\n]*|\/\*[\s\S]*?\*\/)/],
	    [PR['PR_KEYWORD'],     /^(?:model|data|for|in|var|const)(?![A-Za-z0-9_.])/],
	    // numbers
	    [PR['PR_LITERAL'], /^[+-]?(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?)/i],
	    // assignment, operators, and parens, etc.
	    [PR['PR_PUNCTUATION'], /^(\+|-|\*|\/|\|\|[&]{2}|[<>=]=?|\^|%.*?%|{|}|\[|\]|\(|\)|:|,|;)/],
	    [PR['PR_PLAIN'], /^[A-Za-z.]+[A-Za-z0-9_.]*(?![A-Za-z0-9_.])/],
        ]),
    ['bugs','jags']);
