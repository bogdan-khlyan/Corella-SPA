<template>
  <div class="file-preview">

  </div>
<!--	<div class="upload-file-item">-->
<!--		<a href="" @click.prevent="$emit('remove-file', file)" class="upload-file-item__remove">-->
<!--      	<svg-icon :custom-class="'upload-file-item__icon'"-->
<!--      		:icon="require('@/assets/images/icons/common/remove.svg')"-->
<!--      		:height="8" :width="8"-->
<!--      	/>     -->
<!--    	</a>-->
<!--      <upload-file-image-->
<!--      	v-if="isImage" :file="file"-->
<!--         @remove-image="$emit('remove-image', fileSrc, index)"  -->
<!--      />-->
<!--      <a :href="file.src" :download="file.name" class="upload-file-item__link" v-if="!isImage">-->
<!--      	<svg-icon -->
<!--      		:width="32" :height="32"-->
<!--      		:custom-class="'upload-file-item__icon'"-->
<!--      		:icon="require('@/assets/images/icons/extensions/' + (-->
<!--      			knownFileExtensions.find(el => file.extension === el)-->
<!--      			? this.file.extension : 'stub') + '.svg')"-->
<!--      	/>-->
<!--      	<div class="upload-file-item__name">{{ fileName }}</div>-->
<!--      </a>-->
<!--	</div>-->
</template>

<script>
	import UploadFileImage from './UploadFileImage';
	export default {
		name: 'upload-file-item',
		props: {
			file: { type: Object },
		},
		emits: ['remove-file'],
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
				],
				maxSymbolCount: 7,
			}
		},
		computed: {
			isImage() {
        		return (
        			this.imageExtensions.indexOf(this.file.extension) !== -1
        			&& this.file.type === 'image'
        		);
      	},
      	fileName() {
      		const words = this.file.name.split('-');
      		if (words.length < 2) {
      			const symbols = words.join('-').split('', this.maxSymbolCount);
      			return symbols.length < this.file.name.length ? symbols.join('') + '...' : this.file.name;
      		} else {
      			return words[0] + '...-' + words[words.length - 1].slice(-this.maxSymbolCount);
      		}
      	}
		}
	}


</script>

<style lang="scss">
	.upload-file-item {
		position: relative;
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
			fill: $text-white;
			position: relative;
			z-index: 4;

		}
		&__remove {
      	position: absolute;
      	top: -10px;
      	right: -8px;
      	cursor: pointer;
      	width: 30px;
      	height: 30px;
      	background-color: $bg-white;
      	border-radius: 50%;
      	display: flex;
      	justify-content: center;
      	align-items: center;
      	&:before {
        		content: "";
        		position: absolute;
        		top: 3px;
        		z-index: 3;
        		right: 3px;
        		width: 24px;
        		height: 24px;
        		background-color: $text-error;
        		border-radius: 50%;
     		}
    	}
		&__name {
			font-family: "Rubik";
			color: $text-grey;
			font-size: 12px;
			line-height: 1;
			text-align: center;
			margin: 10px 0px 0px 0px;
		}
	}
</style>

