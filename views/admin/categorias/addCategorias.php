<?php include '../validate.php' ?>
<div ng-controller="AdminController">
    <navbarheaderadmin></navbarheaderadmin>
</div>
<header id="header">
    <div class="container">
        <div class="row">
            <div class="col-md-10">
                <h1><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard <small>Controle Suas Categorias</small></h1>
            </div>
        </div>
    </div>
    <!-- /.container -->
</header>

<section id="breadcrumb">
    <div class="container">
        <ol class="breadcrumb">
            <li class="active">Dashboard / Categorias / Adicionar Categoria</li>
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
                        <h3 class="panel-title">Adicionar Categoria</h3>
                    </div>
                    <div class="panel-body">
                        <form ng-submit="AdminController.addCategoria(categoria)">

                            <div class="form-group">
                                <label>Categoria</label>
                                <input type="text" ng-model="categoria.CategoryName" class="form-control" required maxlength="20" placeholder="Categoria do Livro">
                            </div>
                            
                            <button type="submit" class="btn btn-success btn-lg">Cadastrar Categoria</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</div>