<?php

function include_component($component_name)
{
    include __DIR__ . '/components/' . $component_name . '.php';
}
