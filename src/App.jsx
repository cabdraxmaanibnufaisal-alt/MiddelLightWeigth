import { Route, Routes } from 'react-router'
import './App.css'
import  { Toaster } from 'react-hot-toast';
import HomePage from './Pages/HomePage'
import ArticlesPage from './Pages/ArticlesPage'
import ArticlePage from './Pages/ArticlePage'
import SingInPage from './Pages/SingInPage'
import SingUpPage from './Pages/SingUpPage'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {AuthProvider} from './context/AuthContext'
import UnAuthenticatedRouter from './Components/UnAuthenticatedRouter'
import ArticleEditorPage from './Pages/ArticleEditorPage'
import ManageArticlesPage from './Pages/ManageArticlesPage'
import ProfilePage from './Pages/ProfilePage'
import ProtectedRoute from './Components/ProtectedRoute'
function App() {
 

  return (
 <AuthProvider>

      <div className=''>
      {/* Header */}
      <Header />
    
      <main>
        {/* routes */}
       <Routes>

              {/* Public routes */}
        <Route path= '/' element={<HomePage />} />
        <Route path='/articles' element={<ArticlesPage/>} />
        <Route path='/article/:id' element={<ArticlePage />} />

                {/* unauthenticated routes (redirect to home if loged in) */}

            <Route path='/signin' 
            element={
              <UnAuthenticatedRouter><SingInPage/></UnAuthenticatedRouter>
              } />
            <Route path='/signup' 
            element={
              <UnAuthenticatedRouter><SingUpPage/></UnAuthenticatedRouter>
            } />

            {/* protected route */}

            <Route path='/editor' 
            element={
              <ProtectedRoute>
                <ArticleEditorPage/>
                </ProtectedRoute>
              }/>
          

            <Route path='/editor/:id'
             element={
             <ProtectedRoute><ArticleEditorPage/></ProtectedRoute>
             }/>
            

            <Route path='/manage-article' 
            element={
              <ProtectedRoute>
                <ManageArticlesPage/>
                </ProtectedRoute>
            }/>
            

            <Route path='/profile' element={
              <ProtectedRoute>
                <ProfilePage/>
                </ProtectedRoute>
            }/>
            

       </Routes>
      </main> 
         {/* Footer */}
           <Footer/>
      </div>
       <Toaster />
  </AuthProvider>
  )
}

export default App
