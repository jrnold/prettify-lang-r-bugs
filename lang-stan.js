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
 * Registers a language handler for Stan models
 *
 *
 * To use, include prettify.js and this file in your HTML page.
 * Then put your code in an HTML tag like
 *      <pre class="prettyprint lang-stan"> code </pre>
 *
 * The manual included in Stan 1.0, https://code.google.com/p/stan/, is the 
 * basis for the grammar and keywords.
 * 
 * @author jeffrey.arnold@gmail.com
 */
PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
            // Whitespace is made up of spaces, tabs and newline characters.
            [PR['PR_PLAIN'],       /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0'],
        ],
        [
	  [PR['PR_TYPE'], /^(?:int|real|(?:row_)?vector|(?:positive_)?ordered|simplex|(?:(?:corr|cov)_)?matrix)\b/],
          [PR['PR_COMMENT'],     /^(?:(\/\/|#)[^\r\n]*|\/\*[\s\S]*?\*\/)/],
	  [PR['PR_KEYWORD'],     /^(?:for|in|lp__|(transformed\s+)?(parameters|data)|model|generated\s+quantities|T|lower|upper|print|if|else|while)\b/, null],
	  [PR['PR_LITERAL'], /^[+-]?(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?)/i],
	  [PR['PR_PUNCTUATION'], /^\+|-|\.?\*|\.?\/|<-|~|{|}|\(|\)|;|,|:|\[|\]|\\|<=?|>=?|==?|&&|\|\|!=?'/],
	  [PR['PR_PLAIN'], /^[A-Za-z][A-Za-z0-9_]*\b/],
          [PR['PR_STRING'], /"[^"]*?"/]
        ]),
    ['stan']);
