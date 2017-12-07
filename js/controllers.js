angular.module("App.controllers", [])
    .controller("HomeController", function($scope, $rootScope, $location, $uibModal) {

        $rootScope.windows = [
            { name: "Dados Crédito", enable: true },
            { name: "Últimas Interações", enable: true },
            { name: "Ofertas", enable: true },
            { name: "Últimas Cotações / Pedidos", enable: true },
            { name: "Faturamento por Tonelada", enable: true },
            { name: "Materiais Recomendados", enable: false },
            { name: "Faturamento por Quantidade", enable: true }
        ];


        $scope.config = function() {
            $rootScope.open('md', '', 'view/modal/config.html', '');
        }

        $rootScope.selecteds = 0;

        $rootScope.select = function(box) {
            if (box){
                box.enable = !box.enable;
            }
            $rootScope.selecteds = 0;

            angular.forEach($rootScope.windows, function(value, key) {
                if (value.enable) {
                    $rootScope.selecteds++;
                }
            });
            console.log(">> " + $rootScope.selecteds);
        }

        $rootScope.select();

        $rootScope.getEnabled = function(box) {
            if (!box.enable) {
                if ($rootScope.selecteds > 5) {
                    return true;
                }
            }
            return false;
        }


        $scope.items = [{
            href: "#/cliente",
            label: 'cliente!'
        }, {
            href: "#/tela3",
            label: 'tela3.'
        }, {
            href: "#/simulacoes",
            label: 'termometro'
        }];

        $scope.status = {
            isopen: false
        };

        $scope.toggled = function(open) {};

        $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };


        $rootScope.dadosGraficos = [{
            "x": "mês1",
            "cim": 47,
            "col": 12,
            "bas": 6,
            "cal": 21,
            "agr": 23
        }, {
            "x": "mês2",
            "cim": 55,
            "col": 22,
            "bas": 11,
            "cal": 22,
            "agr": 27
        }, {
            "x": "mês3",
            "cim": 66,
            "col": 33,
            "bas": 15,
            "cal": 35,
            "agr": 45
        }];



        $rootScope.dadosGraficosColunas = [{
            "id": "cim",
            "type": "bar",
            "name": "CIMENTOS"
        }, {
            "id": "col",
            "type": "bar",
            "name": "COLANTES"
        }, {
            "id": "bas",
            "type": "bar",
            "name": "BÁSICAS"
        }, {
            "id": "cal",
            "type": "bar",
            "name": "CAL"
        }, {
            "id": "agr",
            "type": "bar",
            "name": "AGREGADOS"
        }];

        $rootScope.datax = {
            "id": "x"
        };

        $scope.openPop = function() {
            $rootScope.open('md', '', 'view/modal/pedido.html', '');
        }



        $scope.openPop();

    })
    .controller("ModalInstanceCtrl", function($scope, $rootScope, $filter, $uibModal, $document, $location, $uibModalInstance) {

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };

    })
    .controller("MainController", function($scope, $rootScope, $filter, $uibModal, $document, $location) {

        $rootScope.open = function(size, parentSelector, page, tipo) {

            var r = '?n=' + Math.random();

            var parentElem = parentSelector ?
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: page + r,
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl',
                size: size,
                appendTo: parentElem,
                resolve: {
                    items: function() {
                        return [];
                    }
                }
            });

        };


        $rootScope.pesquisas = [{
                id: 652323,
                data: "01.10.2017 - 08:22",
                resumo: "O cliente não efetuou compras nos últimos 3 meses, porém agora demonstra interesse de produtos para obras especiais."
            }, {
                id: 652434,
                data: "02.09.2017 - 10:52",
                resumo: "Sem dados"
            }, {
                id: 652434,
                data: "03.08.2017 - 11:11",
                resumo: "Sem dados"
            }

        ];



        $rootScope.interacoes = [{
            id: 6478,
            data: "11.10.2017 - 08:22",
            status: "Aberto",
            tipoId: "1",
            tipo: "LIGACAO IN",
            resumo: "Informações de crédito para novas compras."
        }, {
            id: 6455,
            data: "02.09.2017 - 10:52",
            status: "Fechado",
            tipoId: "2",
            tipo: "LIGACAO OUT",
            resumo: "Cliente solicitou informação sobre produto Iphone 8."
        }, {
            id: 6155,
            data: "05.08.2017 - 11:11",
            status: "Aberto",
            tipoId: "1",
            tipo: "LIGACAO IN",
            resumo: "Contato do cliente via Chat solicitando visita de vendedor externo."
        }, {
            id: 6331,
            data: "10.07.2017 - 13:20",
            status: "Fechado",
            tipoId: "2",
            tipo: "LIGACAO OUT",
            resumo: "Informações de crédito para novas compras."
        }];







        $rootScope.skus = [{
                id: "SGG-76567576"
            }, {
                id: "SGG-24434"
            }, {
                id: "CIG-4343"
            }, {
                id: "CIG-2223"
            }, {
                id: "CIM-43243"
            }, {
                id: "CIM-312321"
            }


        ]


        $rootScope.materiaisRecomendados = [
            {
                produto: "20004901",
                m1: "0760 x 1120",
                m2: "355KG",
                m3: "$ 4,78",
                m4: "15/10",
                m5: "15/12"
            },
            {
                produto: "20049459",
                m1: "0660 x 0960",
                m2: "150KG",
                m3: "$ 5,60",
                m4: "15/10",
                m5: "15/12"
            },
            {
                produto: "20008547",
                m1: "2092 x 4409",
                m2: "227KG",
                m3: "$ 12,10",
                m4: "20/09",
                m5: "27/11"
            }
        ]

        $rootScope.faturaTon = [{
                produto: "ELETRÔNICOS",
                m1: 10,
                m2: 15,
                m3: 20,
                m4: 18,
                m5: 25,
                m6: 30
            }, {
                produto: "BOOKS",
                m1: 8,
                m2: 12,
                m3: 22,
                m4: 35,
                m5: 44,
                m6: 55
            }, {
                produto: "CARROS",
                m1: 22,
                m2: 30,
                m3: 40,
                m4: 50,
                m5: 66,
                m6: 70
            }, {
                produto: "CASA",
                m1: 9,
                m2: 22,
                m3: 23,
                m4: 25,
                m5: 20,
                m6: 31
            }
        ]

        $rootScope.ofertas = [
            {url: "view/images/prod1.png"},
            {url: "view/images/prod2.png"},
            {url: "view/images/prod3.png"},
            {url: "view/images/prod4.png"}
        ];

        $rootScope.pedidos = [{
            id: 9000270,
            data: "11.10.17 15:13",
            tipo: "COT",
            status: "REALIZADO",
            resumo: "Carregador Iphone 7"
        }, {
            id: 9000227,
            data: "18.10.17 12:44",
            tipo: "PED",
            status: "FATURADO",
            resumo: "New Ipad 32gb Tela"
        }, {
            id: 9000214,
            data: "18.09.17 17:55",
            tipo: "PED",
            status: "ENTREGUE",
            resumo: "PS4 Sony 1 Tera"
        }, {
            id: 9000199,
            data: "18.08.17 15:25",
            tipo: "COT",
            status: "CANCELADO",
            resumo: "Iphone 8 128 GB"
        }];

    });
