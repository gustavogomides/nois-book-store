<?php include '../validate.php' ?>
<div ng-controller="AdminController">
    <navbarheaderadmin></navbarheaderadmin>
</div>
<header id="header">
    <div class="container">
        <div class="row">
            <div class="col-md-10">
                <h1><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard <small>Controle Seus Livros</small></h1>
            </div>
        </div>
    </div>
    <!-- /.container -->
</header>

<section id="breadcrumb">
    <div class="container">
        <ol class="breadcrumb">
            <li class="active">Dashboard / Livros / Adicionar Livro</li>
        </ol>
    </div>
</section>

<div ng-controller="AdminController">
    <section id="main">
        <div class="container">
            <div class="row">
                <navbarleft></navbarleft>
                <div class="col-md-9">
                    <!-- Visão Geral do Site -->
                    <div class="panel panel-default">
                        <div class="panel-heading main-color-bg">
                            <h3 class="panel-title">Adicionar Livro</h3>
                        </div>
                        <div class="panel-body">
                        <form ng-submit="AdminController.addLivro(livro)">

                                <div class="form-group">
                                    <label>ISBN</label>
                                    <input type="text" class="form-control" ng-model="livro.isbn" required maxlength="15" pattern="[0-9]{5,15}" placeholder="ISBN do Livro">
                                </div>

                                <div class="form-group">
                                    <label>Título</label>
                                    <input type="text" class="form-control" ng-model="livro.title" required maxlength="100" placeholder="Título do Livro">
                                </div>

                                <div class="form-group">
                                    <label>Capa do Livro</label>
                                    <input type="file" fileread="livro.image" required name="pic" accept="image/*" class="form-control" placeholder="Capa do Livro">
                                </div> 

                                <span ng-init="AdminController.listarCategorias()">
                                    <div class="form-group">
                                        <label>Categoria</label>
                                            <select class="form-control" required ng-model="livro.CategoryName" >
                                            <option value="" disabled selected>Categoria do Livro</option>
                                            <option ng-repeat="categoria in listaDeCategorias">{{categoria.CategoryName}}</option>
                                        </select>
                                    </div>
                                </span>

                                <span ng-init="AdminController.listarAutores()">
                                    <div class="form-group">
                                        <label>Autor</label>
                                        <select class="form-control" required ng-model="livro.nameL">
                                            <option value="" disabled selected>Autor do Livro</option>
                                            <option ng-repeat="autor in listaDeAutores">{{autor.nameF}} {{autor.nameL}}</option>
                                        </select>
                                    </div>
                                </span>

                                <div class="form-group">
                                    <label>Descrição</label>
                                    <textarea name="editor1" ck-editor ng-model="livro.description" required class="form-control" placeholder="Descrição do Livro"></textarea>
                                </div> 

                                <div class="form-group">
                                    <label>Preço</label>
                                    <input type="text" ng-model="livro.price" required class="form-control" placeholder="Preço do Livro">
                                </div>


                                <div class="form-group">
                                    <label>Editora</label>
                                    <input type="text" ng-model="livro.publisher" class="form-control" required maxlength="30" placeholder="Editora do Livro">
                                </div>

                                <div class="form-group">
                                    <label>Data de publicação</label>
                                    <input type="date" ng-model="livro.pubdate" class="form-control" required placeholder="Data de Publicação do Livro">
                                </div>

                                <div class="form-group">
                                    <label>Edição</label>
                                    <input type="text" ng-model="livro.edition" required maxlength="5" class="form-control" placeholder="Edição do Livro">
                                </div>

                                <div class="form-group">
                                    <label>Número de Páginas</label>
                                    <input type="text" ng-model="livro.pages" required maxlength="5" class="form-control" placeholder="Número de Páginas do Livro">
                                </div>

                                <button type="submit" class="btn btn-success btn-lg">Cadastrar Livro</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>