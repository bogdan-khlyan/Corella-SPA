<template>
	<div class="upload-file-item">
      <upload-file-image
      	v-if="isImage"
         @remove-image="$emit('remove-image', fileSrc, index)" 
         :file="file"
      />
      <a :href="file.src" :download="file.name" class="upload-file-item__link" v-if="!isImage">
      	<svg-icon 
      		:width="32"
      		:height="32"
      		:custom-class="'upload-file-item__icon'"
      		:icon="require('@/assets/images/icons/extensions/' + (
      			knownFileExtensions.find(el => file.extension === el)
      			? this.file.extension : 'stub') + '.svg')"
      	/>
      	<div class="upload-file-item__name">{{ this.file.name }}</div>
      </a>
	</div>

</template>

<script>
	import UploadFileImage from './UploadFileImage';
	export default {
		name: 'upload-file-item',
		props: {
			file: { type: Object },
		},
		components: {
			UploadFileImage
		},
		data() {
			return {
				imageExtensions: ['png', 'jpg', 'jpeg'],
				knownFileExtensions: [
					'html', 'css', 'pdf', 'doc', 
					'docx', 'txt', 'json', 'svg', 
					'xls', 'xml', 'psd', 'js'
				]
			}
		},
		computed: {
			isImage() {
        		return ( 
        			this.imageExtensions.indexOf(this.file.extension) !== -1 
        			&& this.file.type === 'image'
        		);
      	},
		}
	}
</script>

<style lang="scss">
	.upload-file-item {
		&__link {
			min-height: 80px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 2px;
			border: 1px solid #EDEDED;
			border-radius: 4px;
			text-decoration: none;
		}
		&__icon {
			margin: 0px 0px 10px 0px;
		}
		&__name {
			font-family: "Rubik";
			color: #707070;
			font-size: 12px;

		}
	}
</style>