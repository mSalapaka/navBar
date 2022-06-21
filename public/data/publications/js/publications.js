function loadArticles() {
	//load the publications stable and associate the required styles; choose the first row as the selectedRow and set the contents of selctedRowProperties in  the detailDiv panel
                            $.ajax({
                                        type: "GET",
                                        url: "myPubs.xml",
                                        dataType: "xml",
                                        success: function(xml)
                                        {
                                                
                                            var counter=0
                                            pubArr=[],
                                            $(xml).find('entry').each(function()
                                            {
                                                //var bibtexId=$(this).attr("id")
                                                var titleText = $(this).find('title').text()
                                                var yearText=$(this).find('year').text()
                                                var journalText = $(this).find('journal').text()
                                                var volumeText = $(this).find('volume').text()
                                                var numberText = $(this).find('number').text()
                                                var pagesText = $(this).find('pages').text()
                                                var typeText=$(this).find('type').text()
                                                var catidText=$(this).find('catid').text()
                                                var pdflinkText=$(this).find('pdflink').text()
                                                var highlightsText=$(this).find('highlights').text()
                                                var  abstractText=$(this).find('abstract').text()
                                                
                                                //creating the author list as a sting for the article          
                                                var authors=[]
                                                authors=$(this).find('author')
                                                var noOfAuthors=authors.length
                                                var authorString="";
                                                
                                                if (counter <200)
                                                { 
                                                for(var i=0; i<authors.length; i++)
                                                    {
                                                        if(i<authors.length-1)
                                                        {
                                                            //authors[i] is not a jquery object and therfore cant use jquery function; both of the following statement will work
                                                        //authorString=authorString+authors[i].firstChild.nodeValue+', '
                                                        authorString=authorString+$(authors[i]).text()+', '
                                                        }
                                                        else
                                                        {
                                                    // authorString=authorString+authors[i].firstChild.nodeValue
                                                    authorString=authorString+$(authors[i]).text()
                                                        }
                                                    }
                                                }
                                            
                                            })
                                        }
                                    })
                        }      