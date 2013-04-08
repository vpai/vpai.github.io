---
layout: post
title: Creating My Personal Webpage using Jekyll
---

Woohoo 
In this post I will explain how to go about quickly setting up [static webpages](http://en.wikipedia.org/wiki/Static_web_page) like
this one using an awesome tool called Jekyll. Jekyll is a great tool to use if you are interested in making a personal 
webpage, a blog, or a simple website for an organization. In particular, if you're looking to start a blog, writing your own code using something like Jekyll offers 
you much more flexibity than you would get using services like Tumblr or Blogspot. Before reading, you should be familiar with HTML and CSS. 

<br>

#### <u>Intro To Jekyll</u>

So what is Jekyll? From the creators themselves:

> <i>"Jekyll is a simple, blog aware, static site generator. It takes a template directory (representing the raw form of a website), 
> runs it through Textile or Markdown and Liquid converters, and spits out a complete, static website suitable for serving with Apache 
> or your favorite web server."</i>

That's a lot to take in, so let's start a bit simpler:

Remember that all webpages on the internet are HTML documents. Often when creating websites, we'd like to have a consistent _layout_ across our
pages while changing the _content_ for each individual page. Jekyll leverages this idea by allowing us to separate 
our website code into templates and content, which we instruct it how to combine. The great part about this is that we only have to write
out layout code once, giving us more time to focus on what's most important, the content. Furthermore, if we want to change the look and feel of our website 
in the future, then we only have to make changes to a few layout files rather than many. In software engineering, the philosophy of reusing code as much as possible is known
as keeping code [DRY](http://en.wikipedia.org/wiki/Don't_repeat_yourself) (Don't Repeat Yourself). This principle makes setting up static webpages 
using Jekyll incredibly quick and painless. 

<br>

#### <u>Installing Jekyll</u>

Jekyll is distributed as a Ruby gem, which means that before you can start using it, you will first need to install the Ruby programming
language. Directions on how to install Ruby can be found [here](http://www.ruby-lang.org/en/downloads/). I also recommend
installing the RubyGems package, which makes installing gems super easy.  

Once you've installed Ruby and RubyGems, installing Jekyll is as easy as typing the command:

	> gem install jekyll

into your command line. That's it! You're ready to start building.

<br>

#### <u>Creating a Blank Directory Structure</u>

Fundamentally, Jekyll is a function, with an input and an output. The input is a set of directories and files that represent the different components of your website, and the output is a folder containing the HTML files that you can serve on the Internet.

Let's begin with the input. It's a specific set of directories and files that Jekyll program knows to look for. They are:

<br>

1.	#### config.yml

	This file is where you store configuration settings for your website. For example, you can specify here if you plan on paginating your blog 
	posts. If you do, Jekyll will automatically create folders titled page1, page2, ... pageN in its output based on how many posts you want per page. See
	[this](https://github.com/mojombo/jekyll/wiki/Configuration) page for a full list of configuation options and defaults.

	The .yml suffix here indicates that this file contains YAML (another markup language). Don't fear if you haven't heard of YAML 
	before, it's one of many standard markup formats that the creators of Jekyll happened to choose. A quick scan through the Wikipedia [page](http://en.wikipedia.org/wiki/YAML) 
	will get you up to speed. 

	If you're just starting out, this file is not too important, so don't bother spending too much time on it. 


2. 	#### \_layouts

	This directory will be where you store the layouts (templates) for your website. The underscore at the beginning of the folder is special. It tells Jekyll not to include the directory in the output. This makes sense - we definitely don't want people to be able to see the templates that we used for our site.
	
	Templates are normal HTML files, but what's cool is that you add programatic elements (like variables, loops, conditionals, etc.) to them using a _templating language_ called Liquid. Liquid allows you to insert Ruby code into your HTML. Why would we want progamming elements in our HTML files? Well, let's say we want to make a layout for our blog that lists links to all our blog posts. We could make a file called base.html in our layouts directory, and fill it with something like this:  

	{% raw %}
		<!DOCTYPE html>
		  <head>
		    <title>My Blog</title>
		  </head>
		  <body>
		  	<h1>All Posts</h1>
		  	{{ content }}
		  	<ul>
			  {% for post in site.posts %}
			    <li>
			      <a href="{{ post.url }}">{{ post.title }}</a>
			    </li>
			  {% endfor %}
			</ul>
		  </body>
		</html>
	{% endraw %}

	So what's going on here? In our HTML body, we're creating a list and filling it by looping through a variable called <code>site.posts</code> using Liquid. This variable is made available to us by Liquid, and contains all files within the posts directory (more below).

	As you may have noticed, there are two different ways of inserting Liquid into your HTML. One way is using an Output markup, in which Ruby code is placed between the following sets of braces: {% raw %}{{ }}{% endraw %}. When a Liquid interpreter comes across an Output markup, it takes the code, evaluates it, and inserts the result directly into the HTML. In the code above, you can see that the title of the link and its href attribute have been set using Output tags. 

	The other type of markup that Liquid offers is called a Tag markup, which consists of code between these braces: {% raw %}{% %}{% endraw %}. Instead of resulting in content that we eventually want on our page, Tag markups are used for programmatic elements that we want to use but not output. In the example above, the for loop is included in a Tag markup. 

	What about the line containg {% raw %}<code>{{ content }}</code>{% endraw %}? That line tells Liquid the following: "put the code for any file that uses this template here". See the section about index.html below for more detail.

	The full Liquid reference can be found [here](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers).
	
3.	#### \_includes

	This directory is where you store snippets of HTML that you are can plug into any page. Let's say you have a navigation bar that you want to show up on all your pages. You can put the HTML for that nav bar in a file (call it nav.html) in this folder, then insert it anywhere across your site using following Tag markup: 

	{% raw %}
		{% include nav.html %}
	{% endraw %}

	This leads to very DRY code!

4. 	#### \_posts

	If you have a blog on your site, then this folder is where you store your blog posts. Here's an example:

		--- 
		title: My First Blog Post!
		--- 

		Woohoo, excited to have my own blog!

	Here, the content between the two lines containing <code>---</code> is what we call YAML front matter. The above snippet represents a single blog post, and in the YAML front matter we are telling Liquid that this post's title is "My First Blog Post". If you look back up the page, this is how Liquid knows how to fill in the variable <code>post.title</code> in the layout file.

	Blog posts need to be named in specific ways for Jekyll to understand them. Name all your posts with the following format: <code>YEAR-MONTH-DAY-title.MARKUP</code>. Here MARKUP can be HTML, Markdown, or Textile.

5. #### \_site

	This is where the generated site (output) will be placed once Jekyll is done transforming it. You should create this directory, but never add files to it manually.

6. #### index.html

	It's extremely common practice to name the landing page of your website index.html. Suppose we want our landing page to use the base.html layout that we created above. We would create our file in our top level folder, and fill it with the following:

		--- 
		layout: base
		--- 

		Hello World!	

	The YAML front matter tells Jekyll that this file uses the base layout. Because of this, the text "Hello World" will be inserted into where we put the line {% raw %}{{ content }}{% endraw %} in the layout file!

<br> 

#### The Output

Once you have all our pieces in place, you can test out your site locally by navigating to your top level directory and typing:

	> jekyll --server --auto 

Then navigate to [localhost:4000](http://localhost:4000) in your browser. Voila!

