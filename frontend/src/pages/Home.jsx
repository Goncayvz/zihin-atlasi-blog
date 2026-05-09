import { useState } from 'react'
import toast from 'react-hot-toast'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import CommentForm from '../components/CommentForm'
import CommentList from '../components/CommentList'

export default function Home() {
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])

  // POST İŞLEMLERİ
  const addPost = (content, category) => {
    const newPost = {
      id: Date.now(),
      content,
      category,
      likes: 0,
      createdAt: new Date().toISOString()
    }
    setPosts([newPost, ...posts])
    toast.success('Paylaşım eklendi! ✨')
  }

  const editPost = (id, newContent) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, content: newContent } : post
    ))
    toast.success('Paylaşım güncellendi! ✏️')
  }

  const likePost = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ))
    toast('Beğendin! 👍', { icon: '❤️' })
  }

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
    toast.error('Paylaşım silindi 🗑️')
  }

  // YORUM İŞLEMLERİ
  const addComment = (content) => {
    const newComment = {
      id: Date.now(),
      content,
      createdAt: new Date().toISOString()
    }
    setComments([newComment, ...comments])
    toast.success('Yorum eklendi! 💬')
  }

  const editComment = (id, newContent) => {
    setComments(comments.map(comment =>
      comment.id === id ? { ...comment, content: newContent } : comment
    ))
    toast.success('Yorum güncellendi! ✏️')
  }

  const deleteComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id))
    toast.error('Yorum silindi 🗑️')
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-purple-100">
      <PostForm onPostSubmit={addPost} />
      
      <h2 className="text-xl font-bold mt-8 mb-4 text-purple-800">📝 Paylaşımlar</h2>
      <PostList 
        posts={posts} 
        onLike={likePost} 
        onDelete={deletePost} 
        onEdit={editPost}
      />
      
      <CommentForm onCommentSubmit={addComment} />
      
      <h2 className="text-xl font-bold mt-8 mb-4 border-t border-purple-200 pt-4 text-purple-800">💬 Yorumlar</h2>
      <CommentList 
        comments={comments} 
        onEdit={editComment} 
        onDelete={deleteComment} 
      />
    </div>
  )
}