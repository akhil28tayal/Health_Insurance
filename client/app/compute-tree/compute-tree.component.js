"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var compute_tree_metadata_1 = require('./compute-tree.metadata');
var ComputeTreeComponent = (function () {
    function ComputeTreeComponent(el) {
        this.el = el;
        this.i = 0;
        this.treeData = [];
        this.dataset1 = [];
        this.dataset2 = [];
        this.sum1 = 0;
        this.sum2 = 0;
        this.sumData = [];
        this.bin = [];
        this.count = 0;
        this.elem = this.el.nativeElement;
    }
    ComputeTreeComponent.prototype.track = function (event) {
        console.log(window.pageYOffset);
    };
    ComputeTreeComponent.prototype.ngAfterViewInit = function () {
        this.setup();
        this.create_svg();
        this.create_tree();
        this.update(this.root);
    };
    ComputeTreeComponent.prototype.setup = function () {
        this.height = this.elem.firstChild.offsetHeight;
        this.width = this.elem.firstChild.offsetWidth;
        this.treeData = [
            {
                "name": "Level A",
                "children": [
                    {
                        "name": "Level 2A",
                        "children": [
                            {
                                "name": "Level 3AA",
                                "children": [
                                    { "name": "Level 4AAA" },
                                    { "name": "Level 4AAB" }
                                ]
                            },
                            {
                                "name": "Level 3AB",
                                "children": [
                                    { "name": "Level 4ABA" },
                                    { "name": "Level 4ABB" }
                                ]
                            }]
                    },
                    {
                        "name": "Level 2B",
                        "children": [
                            {
                                "name": "Level 3BA",
                                "children": [
                                    { "name": "Level 4BAA" },
                                    { "name": "Level 4BAB" }
                                ]
                            },
                            {
                                "name": "Level 3BB",
                                "children": [
                                    { "name": "Level 4BBA" },
                                    { "name": "Level 4BBB" }
                                ]
                            }]
                    }]
            }];
        for (var i = 0; i < compute_tree_metadata_1.Users.length; i++) {
            if (compute_tree_metadata_1.Users[i].gender === 'male')
                this.dataset1[i] = compute_tree_metadata_1.Users[i].BMI;
            else
                this.dataset2[i] = compute_tree_metadata_1.Users[i].BMI;
        }
        for (var i = 0; i < 100; i++) {
            this.sum1 += this.dataset1[i];
            this.sum2 += this.dataset2[i];
        }
        this.sumData = [this.sum1, this.sum2];
        this.bin1 = d3.layout.histogram()(this.dataset1);
        this.bin2 = d3.layout.histogram()(this.dataset2);
        for (var i = 0; i < this.bin1.length; i++) {
            this.bin[i] = [this.bin1[i], this.bin2[i]];
        }
    };
    ComputeTreeComponent.prototype.create_svg = function () {
        this.svg = d3.select(this.elem.firstChild)
            .append("svg")
            .attr("width", "100%")
            .attr("height", "100%");
        this.nodeLayer = this.svg.append("g")
            .attr("class", "node_layer")
            .attr("transform", "translate(0,30)");
        this.linkLayer = this.svg.append("g")
            .attr("class", "link_layer")
            .attr("transform", "translate(0,30)");
    };
    ComputeTreeComponent.prototype.create_tree = function () {
        this.tree = d3.layout.tree()
            .size([this.height, this.width]);
        this.root = this.treeData[0];
        this.root.x0 = this.width / 2 - 100;
        this.root.y0 = 0;
    };
    ComputeTreeComponent.prototype.update = function (source) {
        //console.log(this.count++);
        var nodes = this.tree.nodes(source).reverse();
        var links = this.tree.links(nodes);
        nodes.forEach(function (d) {
            d.y = d.depth * 100;
        });
        console.log(nodes);
        var node = this.nodeLayer.selectAll("g.node")
            .data(nodes)
            .enter()
            .append("g")
            .attr("class", "node")
            .attr("transform", function (d) {
            return "translate(" + d.x * 1.5 + "," + d.y * 1.2 + ")";
        });
        var link = this.linkLayer.selectAll("path.link")
            .data(links)
            .enter()
            .append("path")
            .attr("class", "link")
            .attr("stroke", "#dddddd")
            .attr("fill", "none")
            .attr("d", function (d) {
            return "M" + " " + (d.source.x * 1.5 + 40) + " " + (d.source.y * 1.2 + 60) + " L " + (d.target.x * 1.5 + 40) + " " + (d.source.y * 1.2 + 60) + " L " + (d.target.x * 1.5 + 40) + " " + (d.source.y * 1.2 + 70);
        })
            .attr("opacity", 1).node();
        this.createTree(node);
        this.createPie(node);
        nodes.forEach(function (d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    };
    ComputeTreeComponent.prototype.createTree = function (node) {
        console.log(this.count++);
        var gTree = node.append("g")
            .attr("class", "tree")
            .attr("opacity", "1");
        var gBin = gTree.selectAll("g.tree")
            .data(this.bin)
            .enter()
            .append("g")
            .attr("class", "bin")
            .attr("transform", function (d, i) {
            return "translate(" + i * 10 + ",0)";
        });
        var rect1 = gBin.append("rect")
            .attr("class", "target")
            .attr("x", 0)
            .attr("y", function (d, i) {
            return 50 - d[0].length * 2;
        })
            .attr("width", 5)
            .attr("height", function (d, i) {
            return d[0].length * 2;
        })
            .attr("fill", "rgba(65,153,43,1)");
        var rect2 = gBin.append("rect")
            .attr("class", "not-target")
            .attr("x", 5)
            .attr("y", function (d, i) {
            return 50 - d[1].length * 2;
        })
            .attr("width", 4)
            .attr("height", function (d, i) {
            return d[1].length * 2;
        })
            .attr("fill", "rgba(16,70,131,1)");
    };
    ComputeTreeComponent.prototype.createPie = function (node) {
        var arc = d3.svg.arc()
            .outerRadius(30)
            .innerRadius(0);
        var pie = d3.layout.pie()
            .sort(null);
        var gPie = node.append("g")
            .attr("class", "pie")
            .attr("transform", "translate(40,0)")
            .attr("opacity", 0);
        var pieChart = gPie.selectAll("g.arc")
            .data(pie(this.sumData))
            .enter()
            .append("g")
            .attr("class", "arc");
        pieChart.append("path")
            .attr("d", arc)
            .attr("fill", function (d, i) {
            if (i == 0)
                return "rgba(65,153,43,1)";
            else
                return "rgba(16,70,131,1)";
        });
    };
    __decorate([
        core_1.HostListener("window:scroll", ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ComputeTreeComponent.prototype, "track", null);
    ComputeTreeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tree-component',
            templateUrl: './compute-tree.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ComputeTreeComponent);
    return ComputeTreeComponent;
}());
exports.ComputeTreeComponent = ComputeTreeComponent;
//# sourceMappingURL=compute-tree.component.js.map