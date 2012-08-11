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
 * Registers a language handler for S, S-plus, and R source 
 *
 *
 * To use, include prettify.js and this file in your HTML page.
 * Then put your code in an HTML tag like
 *      <pre class="prettyprint lang-r"> code </pre>
 *
 * Language definition from
 * http://cran.r-project.org/doc/manuals/R-lang.html.
 * Keywords and operators are mostly those included in the 
 * Pygments R lexer.
 * 
 * @author jeffrey.arnold@gmail.com
 */
PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
            [PR['PR_PLAIN'],       /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0'],
	    [PR['PR_STRING'],      /^\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/, null, '"'],
	    [PR['PR_STRING'],      /^\'(?:[^\'\\]|\\[\s\S])*(?:\'|$)/, null, "'"]
        ],
        [
            [PR['PR_COMMENT'],     /^#.*/],
	    [PR['PR_KEYWORD'],     /^(?:for|in|while|if|else|break|return|function)(?![A-Za-z0-9_.])/],
	    [PR['PR_LITERAL'], /^[+-]?(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?)/i],
	    // builtin symbols
	    [PR['PR_LITERAL'], /^(?:NULL|NA(?:_(?:integer|real|complex|character)_)?|TRUE|FALSE|NaN|\.\.\.)(?![A-Za-z0-9_.])/],
	    // assignment, operators, and parens, etc.
	    [PR['PR_PUNCTUATION'], /^(?:<-|=|~|%[^%]+%|{|}|\[|\]|\[\[|\]\]|\$|\(|\)|@|:::?|;|,|<-|-|==|<=|>=|<|>|&&|&|!=|\|\|?|\*|\+|\^|\/|:)/],
	    [PR['PR_PLAIN'], /^[A-Za-z.]+[A-Za-z0-9_.]*(?![A-Za-z0-9_.])/],
	    // string backtick
	    [PR['PR_STRING'], /^`.+`/]
        ]),
    ['r', 's', 'R', 'S', 'Splus']);
