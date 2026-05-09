<?php
require_once 'db.php';

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        $postId = isset($_GET['post_id']) ? (int)$_GET['post_id'] : 0;
        $sql = "SELECT * FROM comments";
        if ($postId) {
            $sql .= " WHERE post_id = $postId";
        }
        $sql .= " ORDER BY created_at DESC";
        
        $result = $conn->query($sql);
        $comments = [];
        while($row = $result->fetch_assoc()) {
            $comments[] = $row;
        }
        echo json_encode($comments);
        break;
        
    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $comment = $conn->real_escape_string($data['comment']);
        $userId = (int)($data['user_id'] ?? 1);
        $postId = (int)($data['post_id'] ?? 0);
        
        $conn->query("INSERT INTO comments (user_id, post_id, comment) VALUES ($userId, $postId, '$comment')");
        echo json_encode(['success' => true, 'message' => 'Yorum eklendi!']);
        break;
        
    case 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        $commentId = (int)$data['comment_id'];
        $newComment = $conn->real_escape_string($data['comment']);
        
        $conn->query("UPDATE comments SET comment='$newComment' WHERE id=$commentId");
        echo json_encode(['success' => true]);
        break;
        
    case 'DELETE':
        $commentId = (int)$_GET['id'];
        $conn->query("DELETE FROM comments WHERE id=$commentId");
        echo json_encode(['success' => true]);
        break;
}
?>