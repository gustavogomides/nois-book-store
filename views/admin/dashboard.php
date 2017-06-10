<?php include 'validate.php' ?>
<div ng-controller="AdminController">
    <navbarheaderadmin></navbarheaderadmin>
</div>

<header id="header">
    <div class="container">
        <div class="row">
            <div class="col-md-10">
                <h1><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard <small>Controle Sua Loja</small></h1>
            </div>
            <div class="col-md-2">
                <div class="dropdown create">
                    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="true">
                            Adicionar Conteúdo
                            <span class="caret"></span>
                        </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a href="#/addLivro">Adicionar Livro</a></li>
                        <li><a href="#/addAutor">Adicionar Autor</a></li>
                        <li><a href="#/addCategoria">Adicionar Categoria</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- /.container -->
</header>

<section id="breadcrumb">
    <div class="container">
        <ol class="breadcrumb">
            <li class="active">Dashboard</li>
        </ol>
    </div>
</section>

<section id="main">
    <div class="container">
        <div class="row">
            <div ng-controller="AdminController">
                <navbarleft></navbarleft>
            </div>
            <div class="col-md-9">
                <!-- Visão Geral do Site -->
                <div class="panel panel-default">
                    <div class="panel-heading main-color-bg">
                        <h3 class="panel-title">Visão Geral da Loja</h3>
                    </div>
                    <div class="panel-body">
                        <a href="#/livros">
                        <div class="col-md-3">
                            <div class="well dash-box">
                                <h2>
                                    <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
                                </h2>
                                <h4>Livros</h4>
                            </div>
                        </div>
                        </a>
                        <a href="#/categorias">

                        <div class="col-md-3">
                            <div class="well dash-box">
                                <h2>
                                    <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> 
                                </h2>
                                <h4>Categorias</h4>
                            </div>
                        </div>
                        </a>
                        <a href="#/autores">

                        <div class="col-md-3">
                            <div class="well dash-box">
                                <h2>
                                    <span class="glyphicon glyphicon-user" aria-hidden="true"></span> 
                                </h2>
                                <h4>Autores</h4>
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>