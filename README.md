# Angular

## Introduction

![](https://angular.io/assets/images/logos/angular/angular.png)

**Angular** is a comprehensive framework for building web, mobile and desktop applications. 

Its significance stems from its **robust architecture and full-featured toolkit** that includes everything developers need to build scalable applications.

Angular enables developers to create **powerful components with dependency injection**, and then organize them into **modules to build enterprise-level applications**.

With its **change detection mechanism and Ivy rendering engine**, it efficiently updates and renders components when data changes, resulting in high-performance applications.

As a result, Angular has become an **enterprise-level framework**, widely adopted by **large organizations and businesses worldwide**.

[Angular Github](https://github.com/angular/angular): Star 89k, Fork 24k

- [Angular Official Site](https://angular.io/docs)

## Project Design

```mermaid
graph TD
    subgraph Entry
        AppModule --> AppRoutingModule
    end

    subgraph Modules
        BlogModule[BlogModule]
        SharedModule[SharedModule]
        GameModule[GameModule]
    end

    subgraph Main Components
        AppRoutingModule --> AppComponent
        AppRoutingModule --> GameComponent
        
        AppComponent --> HeaderComponent
        AppComponent --> MainComponent
        AppComponent --> BlogFormComponent

        MainComponent --> BlogComponent
        MainComponent --> BlogListComponent
        MainComponent --> SearchComponent

        BlogComponent --> CommentsComponent
        BlogComponent --> TruncatedTitleComponent
        BlogListComponent --> TruncatedTitleComponent
    end

    subgraph Services
        BlogService[BlogService]
        CommentService[CommentService]
        MarkdownService[MarkdownService]
        BlogComponent -.->|Uses| MarkdownService
        BlogComponent -.->|Uses| CommentService
        CommentsComponent -.->|Uses| CommentService
    end

    subgraph Shared Components
        TooltipDirective[TooltipDirective]
        TruncatedTitleComponent -.->|Uses| TooltipDirective
        HeaderComponent -.->|Uses| TooltipDirective
    end

    %% Data Flow
    BlogService -.->|Service Data| AppComponent
    BlogService -.->|Service Data| MainComponent
    BlogService -.->|Service Data| HeaderComponent
    BlogService -.->|Service Data| GameComponent

    classDef module fill:#f9f,stroke:#333,stroke-width:2px
    classDef component fill:#bbf,stroke:#333,stroke-width:2px
    classDef service fill:#bfb,stroke:#333,stroke-width:2px

    class BlogModule,SharedModule,GameModule module
    class AppComponent,AppRoutingModule,MainComponent,HeaderComponent,BlogComponent,BlogListComponent,SearchComponent,CommentsComponent,BlogFormComponent,GameComponent,TruncatedTitleComponent,TooltipDirective component
    class BlogService,CommentService,MarkdownService service
```
