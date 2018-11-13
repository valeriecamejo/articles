<?php

namespace App\Http\Controllers;

use App\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articles = Article::get();
        echo json_encode($articles);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $article = new Article();
        $article->title = $request->input('title');
        $article->description = $request->input('description');
        $article->save();
        print_r(json_encode($article));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Article  $article_id
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article_id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Article  $article_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $article_id)
    {
        $article              = Article::find($article_id);
        $article->title       = $request->input('title');
        $article->description = $request->input('description');
        $article->save();
        
        echo json_encode($article);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Article  $article_id
     * @return \Illuminate\Http\Response
     */
    public function destroy($article_id)
    {
        $article = Article::find($article_id);
        $article->delete();

        return json_encode($article);
    }
}
