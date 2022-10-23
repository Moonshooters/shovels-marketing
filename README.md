# Shovels.ai Marketing Site

This is a static site generated with Pelican. 

## Development

Do the regular initial setup. Create and activate a virtual env and then do:

```
pip3 install -r requirements.txt
pelican -lr
```

This will compile the static site into your `output` folder and host a simple HTTP server at that location. The console output will provide you with a link. 

## Production

We currently host on GitHub Pages in the ShovelsAI GitHub organization. GitHub requires the output folder to be `docs` so we have to use a different command.

```
pelican content -o docs -s publishconf.py
cp output/output.css docs/output.css
```

However, the pelican command doesn't copy over the `output.css` file generated by Tailwind so we manually copy it over to `docs`. Push the changes to the `main` branch. **Don't change any other files in the `docs` folder!**

Pushing to GitHub effectively deploys the updated static site.

You can see the latest version now at https://www.shovels.ai!