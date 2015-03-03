desc "Publish to Git Hub"
task :publish do
  system "git add . --all"
  system "git add -u"
  message = "Site updated at #{Time.now.utc}"
  system "git commit -m #{message.inspect}"
  system "git push origin gh-pages"
end

task :default => [:publish]
