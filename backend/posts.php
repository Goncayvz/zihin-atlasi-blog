<?php
require_once 'db.php';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

switch ($method) {
    case 'GET':
        $category = isset($_GET['category']) ? $conn->real_escape_string($_GET['category']) : '';
        $sql = "SELECT p.*, u.username FROM posts p JOIN users u ON p.user_id = u.id";
        if ($category !== '') {
            $sql .= " WHERE p.category = '$category'";
        }
        $sql .= " ORDER BY p.created_at DESC";

        $result = $conn->query($sql);
        $posts = [];
        if ($result) {
            while ($row = $result->fetch_assoc()) {
                $posts[] = $row;
            }
        }
        echo json_encode($posts);
        break;

    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);

        $userId = (int)($data['user_id'] ?? 1);
        $rawContent = $data['content'] ?? '';
        $rawCategory = $data['category'] ?? 'yararli-bilgiler';

        if ($rawContent === '') {
            echo json_encode(['success' => false, 'message' => 'İçerik zorunludur.']);
            exit();
        }

        $content = $conn->real_escape_string($rawContent);
        $category = $conn->real_escape_string($rawCategory);

        $ok = $conn->query("INSERT INTO posts (user_id, category, content) VALUES ($userId, '$category', '$content')");
        if ($ok) {
            echo json_encode(['success' => true, 'message' => 'Paylaşım eklendi!', 'id' => $conn->insert_id]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Hata: ' . $conn->error]);
        }
        break;

    case 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        $postId = (int)($data['post_id'] ?? 0);

        if ($postId <= 0) {
            echo json_encode(['success' => false, 'message' => 'post_id zorunludur.']);
            exit();
        }

        if (isset($data['content'])) {
            $content = $conn->real_escape_string($data['content']);
            $conn->query("UPDATE posts SET content='$content' WHERE id=$postId");
        } else {
            $conn->query("UPDATE posts SET likes = likes + 1 WHERE id=$postId");
        }
        echo json_encode(['success' => true]);
        break;

    case 'DELETE':
        $postId = isset($_GET['id']) ? (int)$_GET['id'] : 0;
        if ($postId <= 0) {
            echo json_encode(['success' => false, 'message' => 'id zorunludur.']);
            exit();
        }

        $conn->query("DELETE FROM posts WHERE id=$postId");
        echo json_encode(['success' => true, 'message' => 'Paylaşım silindi']);
        break;
}
?>
