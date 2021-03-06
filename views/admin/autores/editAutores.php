<?php include '../validate.php' ?>
<div ng-controller="AdminController">
    <navbarheaderadmin></navbarheaderadmin>
</div>
<header id="header">
    <div class="container">
        <div class="row">
            <div class="col-md-10">
                <h1><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard <small>Controle Seus Autores</small></h1>
            </div>
        </div>
    </div>
    <!-- /.container -->
</header>

<section id="breadcrumb">
    <div class="container">
        <ol class="breadcrumb">
            <li class="active">Dashboard / Autores / Editar Autor</li>
        </ol>
    </div>
</section>

<div ng-controller="AdminController">
    <span ng-init="AdminController.listarAutorById()">
    <section id="main">
        <div class="container">
            <div class="row">
                <navbarleft></navbarleft>
                <div class="col-md-9">
                    <!-- Visão Geral do Site -->
                    <div class="panel panel-default">
                        <div class="panel-heading main-color-bg">
                            <h3 class="panel-title">Editar Autor</h3>
                        </div>
                        <div class="panel-body">
                            <form ng-submit="AdminController.updateAutor(autor)">

                                <div class="form-group">
                                    <label>Nome</label>
                                    <input type="text" ng-model="autor.nameF" class="form-control" required maxlength="20" placeholder="Informe o Nome">
                                </div>

                                <div class="form-group">
                                    <label>Sobrenome</label>
                                    <input type="text" ng-model="autor.nameL" class="form-control" required maxlength="20" placeholder="Informe o Sobrenome">
                                </div>

                                <button type="submit" class="btn btn-success btn-lg">Editar Autor</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </span>
</div>