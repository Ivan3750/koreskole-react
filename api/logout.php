<?php
require 'auth.php';
session_destroy();
echo json_encode(["success" => true]);