# Nuxt Version of Vue-vben-admin

Look at the [Vue Vben Admin](https://github.com/vbenjs/vue-vben-admin) to learn more.

## Install and use

- Get the project code

```bash
git clone https://github.com/hdqbasith/vben-nuxt.git
```

- Installation dependencies

```bash
cd vben-nuxt

npm install
```

**Install components**
- This project is using vue-vben-admin as core components. I'm using the original files so I do not include some components in this project. Go to vben-nuxt folder and get the components by this method:
```bash
git clone -n --depth=1 --filter=tree:0 https://github.com/vbenjs/vue-vben-admin
cd vue-vben-admin
git config core.sparseCheckout true
echo "/packages/" >> .git/info/sparse-checkout
git checkout
```
