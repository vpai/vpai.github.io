---
layout: post
title: Creating My Personal Webpage using Jekyll
---

In this post I will explain how to go about quickly setting up a [static webpages](http://en.wikipedia.org/wiki/Static_web_page) like
this one using an awesome tool called Jekyll. If you're looking to start a blog, writing your own code offers you much more flexibity than 
you would have using services like Tumblr or Blogspot. 

<br>

So what is Jekyll? From the creators themselves:

> <i>"Jekyll is a simple, blog aware, static site generator. It takes a template directory (representing the raw form of a website), 
> runs it through Textile or Markdown and Liquid converters, and spits out a complete, static website suitable for serving with Apache 
> or your favorite web server."</i>

That's a lot to take in, so let's start simpler:

<br>

All webpages on the internet are HTML documents. Often when creating a website, the only
difference we want between individual pages is the _content_ and not the _layout_. Jekyll leverages this idea by allowing us to separate 
our website code into templates and content, which it then knows how to combine. The great part about this is that we only have to write
out layout code once, giving us more time to focus on the content. Additionally, if we want to change some part of the layout, 
in the future, then we only have to make changes to a few files. In software engineering, the philosophy of reusing code as much as possible is known
as keeping code [DRY](http://en.wikipedia.org/wiki/Don't_repeat_yourself) (Don't Repeat Yourself). This principle makes setting up static webpages 
using Jekyll incredibly quick and painless. 

<br> 

### <u>Installing Jekyll</u>

<br> 

Jekyll is distributed as a Ruby gem, which means that before you can start using it, you will first need to install the Ruby programming
language. Directions on how to install Ruby can be found [here](http://www.ruby-lang.org/en/downloads/). I also recommend
installing the RubyGems package, which makes installing gems super easy.  

<br>

Once you've installed Ruby and RubyGems, install Jekyll using the command:


	> gem install jekyll


That's it! You're ready to start building.

<br>

### <u>Creating a Blank Directory Structure</u>

<br>

I find it easy to think of Jekyll as a function, with an input and an output. The input is a set of directories and files that represent the different
components of your website, and the output is a folder with your freshly baked HTML files that are ready for serving (laugh).

<br>

Let's begin with the input. It's a specific set of directories and files that Jekyll knows to look for. They are:

<br>

+	#### config.yml

	<br>

	This file is where you store configuration settings for your website. For example, you can specify here if you plan on paginating your blog 
	posts. If you do, Jekyll will automatically create folders titled page1, page2, ... pageN in its output based on how many posts you want per page. See
	[this](https://github.com/mojombo/jekyll/wiki/Configuration) page for a full list of configuation options and defaults.

	<br>

	The .yml suffix here indicates that this file contains YAML (another markup language). Don't fear if you haven't heard of YAML 
	before, it's a standard markup format that the Jekyll creators happened to choose. A quick scan through the Wikipedia [page](http://en.wikipedia.org/wiki/YAML) 
	will get you up to speed. 

	<br>

	If you're just starting out, this file is not too important, so don't bother spending too much time on it. 

<br>

All content below this line is incomplete. I will get to it soon!

-------------------------

<br>

+ 	#### \_layouts

	<br>

	This directory will be where you store the layouts (templates) for your website. Templates are normal HTML files, but they have
	  
<br>

+ 	#### \_includes

	<br>

	This directory is where you store snippets of HTML that you are can plug into any page.

<br>

+ 	#### \_posts

	<br>
	
	If you have a blog on your site, then this folder is where you store your blog posts. 

<br>

+ 	#### index.html

	<br>

	This will be the home page of your website. 	

<br>

Once we have all our pieces, we let Jekyll do it's thing. To test your site locally, switch to your top level directory and type:

	> jekyll --server --auto 

Then navigate to [localhost:4000](http://localhost:4000) in your browser. 

<br>

### Example

<br> 

Coming soon!

<br>

### Notes

<br>
Templates can inherit from other templates.

<br>
Everything that doesn't start with an underscore will be rendered in the \_site directory.

<br>
### Deploy
<br>
Coming soon!
