<?php
return array(
    'name'=>'Callcter',
    'URL_MODEL'=>2,
    'URL_HTML_SUFFIX'=>'html|dhtml',
    'MODULE_DENY_LIST'=>array(
    	'Common',
    	'Conf',
    	'Runtime'
    ),
    'TEMP_PARSE_STRING'=>array(
        '__PUBLIC__'=>__ROOT__.'/Public'
    ),
    'TEMP_ENGINE_TYPE'=>'PHP'
);